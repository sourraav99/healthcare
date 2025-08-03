import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native'
import React from 'react'
import Wrapper from '../../components/wrapper'
import { FONTS } from '../../res/fonts'
import { fontSizes, useFontScale, usePercentageHeight, width } from '../../hooks/responsive'
import TextComp from '../../components/textComp'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6'
import { COLORS } from '../../res/colors'
import { IMAGES } from '../../res/images'
// import FontAwesome from 'react-native-vector-icons/fontawesome6'

const pharmacies = [
  {
    id: 1,
    name: 'Wellness Pharmacy',
    distance: '0.8 km',
    rating: 4.5,
    reviews: 120,
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGpQzi7fNyrwhO-FigMMtsnH60KzVV4pT1T5nSBpUOLeurargd01qtoBMc4kkztuvbFME&usqp=CAU', // Use your local image path or a remote URL
  },
  {
    id: 2,
    name: 'Health Plus',
    distance: '1.2 km',
    rating: 4.2,
    reviews: 95,
    imageUri: 'https://static.vecteezy.com/system/resources/previews/010/417/055/non_2x/african-american-pharmacist-working-in-drugstore-at-hospital-pharmacy-african-healthcare-photo.jpg'
  },
  {
    id: 3,
    name: 'MediCare Store',
    distance: '2.0 km',
    rating: 4.8,
    reviews: 200,
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmwsj-Y3jcv0xlEhLz6JC4SdiggVRvKG0g-k3eRhOdSHaEz-NjKY3g-t5rS-qnkxGdLU&usqp=CAU',
  },
]

const NearbyPharmacy = () => {
  return (
    <Wrapper
      headerStyles={styles.headerStyles}
      headerChildren={
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity>
              <FontAwesome6 name='arrow-left' color={COLORS.text} size={25} iconStyle='solid' />
            </TouchableOpacity>
            <View style={{ width: width * 0.08 }} />
            <Image
              source={IMAGES.location_gif}
              style={{ height: usePercentageHeight(3.5), width: usePercentageHeight(3.5) }}
            />
            <TextComp style={{ fontSize: fontSizes.large, lineHeight: 25, marginTop: usePercentageHeight(0.5) }}>Mohali</TextComp>
          </View>
        </>
      }
    >
      <ScrollView style={{ paddingHorizontal: width * 0.04 }}>
        <TextComp style={styles.sectionTitle}>Nearby Pharmacy</TextComp>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {pharmacies.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.imageUri }} style={styles.image} />
              <View style={styles.infoContainer}>
                <TextComp style={styles.name}>{item.name}</TextComp>
                <TextComp style={styles.distance}>{item.distance} away</TextComp>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                  <FontAwesome6 name="star" size={14} color={'#FFD600'} iconStyle='solid' />
                  <TextComp style={styles.rating}> {item.rating} </TextComp>
                  <TextComp style={styles.reviews}>({item.reviews} reviews)</TextComp>
                </View>
              </View>
            </View>

          ))}

        </ScrollView>
        <TextComp style={{ fontSize: useFontScale(25), lineHeight: useFontScale(26), alignSelf: 'center', marginTop: usePercentageHeight(3) }}>Upload Prescription</TextComp>
        <TextComp style={{ fontSize: fontSizes.medium, alignSelf: 'center', textAlign: 'center', marginTop: usePercentageHeight(1) }}>We will show the pharmacy that fits as per your prescription.</TextComp>
        <View style={{ height: usePercentageHeight(22),marginTop:usePercentageHeight(2),alignItems:'center' ,width: '100%', flexDirection: 'row' ,borderWidth:0.5,borderColor:COLORS.border}}>
          {/* <TouchableOpacity> */}
            <Image
              source={IMAGES.paste_link_gif}
              style={{ flex: 1, width: '50%', height: usePercentageHeight(18) }}
            />
          {/* </TouchableOpacity> */}
          <Pressable>
            <Image
            
              source={IMAGES.upload_file_gif}
              style={{ flex: 1, width: '50%', height: usePercentageHeight(18) }}
            />
          </Pressable>
        </View>
      </ScrollView>
    </Wrapper>
  )
}

export default NearbyPharmacy

const styles = StyleSheet.create({
  headerStyles: {
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
  },
  sectionTitle: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    marginBottom: usePercentageHeight(2),
    lineHeight: 30,
    marginTop: usePercentageHeight(2),

  },
  card: {
    width: 220,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  name: {
    fontSize: fontSizes.medium,
    fontWeight: '600',
    color: 'black',
  },
  distance: {
    fontSize: useFontScale(12),
    color: COLORS.text,
    marginTop: 2,
  },
  rating: {
    fontSize: useFontScale(12),
    fontWeight: '600',
    color: COLORS.text,
  },
  reviews: {
    fontSize: useFontScale(11),
    color: COLORS.text,
  },
  infoContainer: {
    padding: 8,
  }
})
