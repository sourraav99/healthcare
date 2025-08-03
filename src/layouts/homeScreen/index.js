import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Wrapper from '../../components/wrapper'
import { FONTS } from '../../res/fonts'
import { fontSizes, usePercentageHeight, width } from '../../hooks/responsive'
import TextComp from '../../components/textComp'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6'
import { COLORS } from '../../res/colors'
import { IMAGES } from '../../res/images'

const HomeScreen = () => {
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

    </Wrapper>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  headerStyles: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    borderBottomWidth:1
    // backgroundColor:'red',
    },
  headerText: {
    fontSize: fontSizes.large,
    fontFamily: FONTS.REGULAR
  },
})