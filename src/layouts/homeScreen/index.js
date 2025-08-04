import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable, Dimensions, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Wrapper from '../../components/wrapper'
import { FONTS } from '../../res/fonts'
import { fontSizes, useFontScale, usePercentageHeight, width } from '../../hooks/responsive'
import TextComp from '../../components/textComp'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6'
import { COLORS } from '../../res/colors'
import { IMAGES } from '../../res/images'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '..'

const HomeScreen = () => {
  const navigation=useNavigation()
  const screenWidth = Dimensions.get('window').width;
  const slideAnim = useRef(new Animated.Value(-screenWidth)).current;
  const rightSlide = useRef(new Animated.Value(width)).current;
  const uid = useSelector(state => state.auth.uid);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(rightSlide, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start()
  }, []);

  const gridData = [
    {
      id: 1,
      title: 'Questions',
      icon: IMAGES.questions,
      onPress: () => console.log('Navigate to Questions'),
    },
    {
      id: 2,
      title: 'Reminders',
      icon: IMAGES.reminder,
      onPress: () => navigation.navigate(SCREENS.REMINDER),
    },
    {
      id: 3,
      title: 'Messages',
      icon: IMAGES.messageLink,
      onPress: () => console.log('Navigate to Messages'),
    },
    {
      id: 4,
      title: 'Calendar',
      icon: IMAGES.calender,
      onPress: () => console.log('Navigate to Calendar'),
    },
  ];


  return (
    <Wrapper
      // containerStyle={{backgroundColor:'red'}}
      headerStyles={styles.headerStyles}
      headerChildren={
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity>
              <FontAwesome6 name='bars' color={COLORS.text} size={25} iconStyle='solid' />
            </TouchableOpacity>
            <View style={{ width: width * 0.08 }} />
            <Image
              source={IMAGES.icon}
              style={{ height: usePercentageHeight(3.5), width: usePercentageHeight(3.5) }}
            />
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: COLORS.text,
              height: usePercentageHeight(4),
              width: usePercentageHeight(4),
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <FontAwesome6 name='microphone' color={COLORS.text} size={18} iconStyle='solid' />
          </TouchableOpacity>
        </>
      }
    >
      <ScrollView style={{ padding: width * 0.04 }}>
        <View style={styles.container}>
          {gridData.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card} onPress={item.onPress}>
              <TextComp style={styles.title}>{item.title}</TextComp>
              <Image source={item.icon} style={styles.icon} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoBlock}>
          <TextComp style={{ fontFamily: FONTS.BOLD }}>UPLOAD PRESCRIPTION</TextComp>
          <TextComp>
            Upload a Prescription and Tell Us What you Need. We{"\n"}do the Rest!
          </TextComp>
        </View>
        <View style={{
          //  backgroundColor: 'red',
          flexDirection: 'row', justifyContent: 'space-between'
        }}>
          <TextComp style={{
            // lineHeight:fontSizes.normalText * 1.5
          }}>FLAT 25% OFF ON{"\n"}MEDICINES</TextComp>
          <TouchableOpacity style={{
            backgroundColor: COLORS.lightBlue, elevation: 5, shadowColor: '#000',
            shadowOpacity: 0.25,
            shadowRadius: 3.84, alignItems: 'center', justifyContent: 'center', paddingVertical: usePercentageHeight(1.2), paddingHorizontal: usePercentageHeight(5), borderRadius: 8, marginLeft: usePercentageHeight(2)
          }}>
            <TextComp style={{ color: COLORS.white, fontWeight: '600', }}>ORDER NOW</TextComp>
          </TouchableOpacity>
          <View />
        </View>
        <View style={{ position: 'relative', marginTop: usePercentageHeight(3) }}>
          {/* Side red bar */}
          <View style={{
            height: usePercentageHeight(18),
            width: '50%',
            backgroundColor: COLORS.softPink,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            position: 'absolute',
            top: 0,
            left: -20,
            zIndex: 1,
            marginTop: usePercentageHeight(7)
          }} />

          <View style={{
            width: width,
            alignSelf: 'center',
            zIndex: 2,
            alignItems: 'center',
          }}>
            <Animated.View
              style={{
                // height: usePercentageHeight(18),
                backgroundColor: COLORS.matchaGreen,
                width: width * 0.94,
                zIndex: 2,
                borderRadius: 10,
                marginBottom: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 12,
                transform: [{ translateX: slideAnim }],
              }}
            >
              <View style={{ flex: 1, paddingRight: 8, }}>
                <TextComp
                  style={{
                    fontFamily: FONTS.BOLD,
                    fontSize: fontSizes.large,
                    lineHeight: 25,
                  }}
                >
                  {`Get the Best \nMedical Service`}
                </TextComp>
                <TextComp
                  style={{
                    lineHeight: 18,
                    fontFamily: FONTS.REGULAR,
                  }}
                >
                  {`Rem illum facere quo corporis Quis in saepe itaque ut quos pariatur. Qui numquam rerum hic repudiandae rerum id amet tempore nam molestias omnis qui earum voluptatem!`}
                </TextComp>
              </View>

              <Image
                resizeMode="cover"
                source={IMAGES.doc}
                style={{
                  height: usePercentageHeight(17),
                  width: usePercentageHeight(13),
                  // backgroundColor:'blue'
                  // marginLeft: 10,
                  // flex:1
                }}
              />
            </Animated.View>

            <Animated.View style={{
              height: usePercentageHeight(19.5),
              backgroundColor: COLORS.violetLight,
              width: width * 0.94,
              zIndex: 2,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 12,
              transform: [{ translateX: rightSlide }],
            }}>
              {/* LEFT TEXT SECTION */}
              <View style={{ flex: 0.8, }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ transform: [{ rotate: '-90deg' }] }}>
                    <TextComp style={{
                      fontSize: fontSizes.small,
                      fontWeight: 'bold',
                    }}>
                      UPTO
                    </TextComp>
                  </View>
                  <View>
                    <TextComp
                      style={{
                        fontSize: useFontScale(40),
                        fontWeight: 'bold',
                        lineHeight: 50, // slightly more than fontSize
                        marginTop: usePercentageHeight(2)
                      }}
                    >
                      80%
                    </TextComp>
                    <TextComp style={{ fontSize: useFontScale(18), fontWeight: 'bold', alignSelf: 'flex-start' }}>offer</TextComp>

                  </View>

                </View>



                <TextComp style={{ fontSize: fontSizes.medium,alignSelf: "center", fontWeight: "600" }}>On Health Products</TextComp>

                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.lightBlue, elevation: 4, shadowColor: '#000',
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84, alignItems: 'center', justifyContent: 'center', paddingVertical: usePercentageHeight(1.2), borderRadius: 8,
                  }}
                >
                  <TextComp style={{ color: COLORS.white, fontWeight: '600' }}>SHOP NOW</TextComp>
                </TouchableOpacity>
                {/* <View style={{width:10}}/> */}
              </View>
              <Image
                source={IMAGES.vit}
                resizeMode="contain"
                style={{
                  height: usePercentageHeight(13),
                  width: usePercentageHeight(13),
                  marginLeft: 10
                }}
              />
            </Animated.View>

          </View>

        </View>


      </ScrollView>

    </Wrapper>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  headerStyles: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    // borderBottomWidth: 1
    // backgroundColor:'red',
  },
  headerText: {
    fontSize: fontSizes.large,
    fontFamily: FONTS.REGULAR
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // flex:1,
    // backgroundColor: 'pink'
    marginBottom: usePercentageHeight(1.6),

  },
  card: {
    backgroundColor: COLORS.white,
    width: '47%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.text,
    marginBottom: usePercentageHeight(1.6),
    paddingHorizontal: usePercentageHeight(1.5),
    paddingVertical: usePercentageHeight(0.8),
    // justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: useFontScale(16),
    flex: 1,
  },
  icon: {
    width: usePercentageHeight(4),
    height: usePercentageHeight(4),
    resizeMode: 'contain',
  },
  infoBlock: {
    marginBottom: usePercentageHeight(2),
    backgroundColor: COLORS.white,
    // paddingLeft: width * 0.01,
  },
})