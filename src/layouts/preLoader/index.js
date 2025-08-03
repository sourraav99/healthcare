import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { LOTTIE } from '../../res/lottie';
import TextComp from '../../components/textComp';

const PreLoader = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LottieView source={LOTTIE.loading} style={{ height: 150, width: 150 }} autoPlay loop />
      <TextComp>Please wait.....</TextComp>
    </View>
  )
}

export default PreLoader