import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Linking, FlatList, TouchableOpacity, Image, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { fontSizes, useFontScale, usePercentageHeight, width } from '../../hooks/responsive';
import Wrapper from '../../components/wrapper';
import { COLORS } from '../../res/colors';
import TextComp from '../../components/textComp';
import { useNavigation } from '@react-navigation/native';

const ReminderScreen = () => {
  const navigation = useNavigation();
  const uid = useSelector(state => state.auth.uid);
  const [uploads, setUploads] = useState([]);
  const [links, setLinks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchUserData = async () => {
    if (!uid) return;

    try {
      // Fetch uploads (images, pdfs)
      const uploadsSnapshot = await firestore()
        .collection('UsersFileUrls')
        .doc(uid)
        .collection('uploads')
        .orderBy('uploadedAt', 'desc')
        .get();

      const uploadsData = uploadsSnapshot.docs.map(doc => doc.data());

      // Fetch links
      const linksSnapshot = await firestore()
        .collection('UsersFileUrls')
        .doc(uid)
        .collection('urls')
        .orderBy('createdAt', 'desc')
        .get();

      const linksData = linksSnapshot.docs.map(doc => doc.data());

      setUploads(uploadsData);
      setLinks(linksData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchUserData();
    setRefreshing(false);
  }, []);


  const pdfs = uploads.filter(item => item.url?.endsWith('.pdf'));
  const images = uploads.filter(item => /\.(jpg|jpeg|png|webp|gif)$/i.test(item.url));
  const link = uploads.filter(item => !item.url?.endsWith('.pdf') && !/\.(jpg|jpeg|png|webp|gif)$/i.test(item.url));

  const renderSection = (title, data, renderItem) => {
    if (data.length === 0) return null;
    return (
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>{title}</Text>
        {data.map((item, index) => renderItem({ item, index }))}
      </View>
    );
  };


  const renderPDF = ({ item }) => (
    <TouchableOpacity style={styles.pdfItem} onPress={() => Linking.openURL(item.url)}>
      <TextComp style={styles.pdfText}>📄 View PDF</TextComp>
    </TouchableOpacity>
  );

  const renderImage = ({ item }) => (
    <Image
      source={{ uri: item.url }}
      style={styles.image}
      resizeMode="cover"
    />
  );

  const renderLink = ({ item }) => (
    <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.linkItem}>
      <Text style={styles.linkText}>{item.url}</Text>
    </TouchableOpacity>
  );



  return (
    <Wrapper
      headerStyles={styles.headerStyles}
      headerChildren={
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome6 name="arrow-left" color={COLORS.text} size={25} iconStyle='solid' />
          </TouchableOpacity>
          <View style={{ width: width * 0.08 }} />
          <TextComp style={{ fontSize: fontSizes.large, lineHeight: 25, marginTop: usePercentageHeight(0.5) }}>
            Reminders
          </TextComp>
        </View>
      }
    >
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        contentContainerStyle={styles.scrollContent}
      >
        {uploads.length === 0 && links.length === 0 ? (
          <Text style={styles.noDataText}>No uploads or links found.</Text>
        ) : (
          <>
            {renderSection('📄 PDFs', pdfs, renderPDF)}
            {renderSection('🖼 Images', images, renderImage)}
            {renderSection('🔗 Links', [...link, ...links], renderLink)}
          </>
        )}
      </ScrollView>
    </Wrapper>
  );
};

export default ReminderScreen;

const styles = StyleSheet.create({
  headerStyles: {
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
  },
  scrollContent: {
    paddingBottom: usePercentageHeight(2),
    gap: usePercentageHeight(2),
  },
  section: {
    paddingHorizontal: usePercentageHeight(1.8),
  },
  sectionTitle: {
    fontSize: useFontScale(18),
    fontWeight: 'bold',
    marginBottom: usePercentageHeight(1.2),
    color: COLORS.text,
  },
  image: {
    width: '100%',
    height:usePercentageHeight(22),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: usePercentageHeight(1.2),
  },
  linkItem: {
    padding: 10,
    backgroundColor: '#eef',
    borderRadius: 8,
    marginBottom: usePercentageHeight(1.2),
  },
  linkText: {
    color: '#0066cc',
    fontWeight: '500',
  },
  pdfItem: {
    padding: 10,
    backgroundColor: '#ffe9cc',
    borderRadius: 8,
    marginBottom: usePercentageHeight(1.2),
  },
  pdfText: {
    color: '#cc5500',
    fontWeight: 'bold',
  },
  noDataText: {
    textAlign: 'center',
    color: '#888',
    fontSize: useFontScale(16),
    marginTop: 32,
  },
  sectionHeader: {
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
    marginTop: usePercentageHeight(2.2),
    marginBottom: usePercentageHeight(1.2),
    color: COLORS.text,
  },

});
