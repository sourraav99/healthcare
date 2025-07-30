import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../../components/wrapper'
import { fontSizes } from '../../hooks/responsive'
import { FONTS } from '../../res/fonts'

const LoginScreen = () => {
  return (
    <Wrapper 
    headerStyles={{justifyContent:'center'}}
    headerChildren={<>
      <Text style={{fontSize:fontSizes.large,fontFamily:FONTS.REGULAR }}>Login</Text>
    </>}>
     <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
     <Text>jsbsnskn</Text>
     </View>
    </Wrapper>
  )
}

export default LoginScreen