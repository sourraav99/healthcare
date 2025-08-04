import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../../components/wrapper'
import { fontSizes, height, useFontScale, usePercentageHeight, usePercentageWidth, width } from '../../hooks/responsive'
import { FONTS } from '../../res/fonts'
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6'
import { COLORS } from '../../res/colors'
import InputField from '../../components/inputField'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextComp from '../../components/textComp'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '..'

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LoginScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ email: '', password: '' })


  const handleRegister = () => {
    navigation.navigate(SCREENS.SIGNUP)
  }
  const handleLogin = () => {
    const newErrors = { email: '', password: '' };
    if (!email.trim()) {
      newErrors.email = 'Email is required *'
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required *'
    }
    setError(newErrors);
    const hasErrors = Object.values(newErrors).some(Boolean)
    if (!hasErrors) {
      navigation.navigate(SCREENS.PRE_LOADING, { email: email, password: password, comingFrom: SCREENS.LOGIN })
    }
  }
  const handleForgotPassword = () => {

  }
  return (
    <Wrapper
      headerStyles={styles.headerStyles}
      headerChildren={
        <TextComp style={styles.headerText}>Login</TextComp>
      }
    >
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          enableOnAndroid={true}
          enableAutomaticScroll={true}
          extraScrollHeight={20}
          extraHeight={120}
        >
          <TextComp style={styles.titleText}>HealthCare</TextComp>

          <View style={styles.inputContainer}>
            <InputField
              containerStyle={styles.inputField}
              label='Email'
              value={email}
              onChangeText={setEmail}
              onFocus={() => setError(prev => ({ ...prev, email: '' }))}
              onBlur={() => setError(prev => ({ ...prev, email: '' }))}
              icon={<FontAwesome6 name='envelope' size={20} color={COLORS.text} iconStyle='regular'
                style={styles.inputIcon} />}
            />
            {error.email ? <TextComp style={styles.errorText}>{error.email}</TextComp> : null}
          </View>

          <View style={styles.spacer} />

          <View style={styles.inputContainer}>
            <InputField
              label='Password'
              value={password}
              onFocus={() => setError(prev => ({ ...prev, password: '' }))}
              onBlur={() => setError(prev => ({ ...prev, password: '' }))}
              onChangeText={setPassword}
              containerStyle={styles.inputField}
              icon={<FontAwesome6 name='lock' size={20} color={COLORS.text} iconStyle='solid'
                style={styles.inputIcon} />}
            />
            {error.password ? <TextComp style={styles.errorText}>{error.password}</TextComp> : null}
          </View>

          <TouchableOpacity style={styles.forgotPasswordButton}>
            <TextComp style={styles.forgotPasswordText}>Forgot Password !</TextComp>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <View style={styles.registerRow}>
              <TextComp>Don't Have an Account? </TextComp>
              <TouchableOpacity onPress={handleRegister}>
                <TextComp style={styles.registerLink}>Click here to register</TextComp>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <TextComp style={styles.loginButtonText}>LOGIN</TextComp>
        </TouchableOpacity>
      </View>
    </Wrapper>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  headerStyles: {
    justifyContent: 'center'
  },
  headerText: {
    fontSize: fontSizes.large,
    fontFamily: FONTS.REGULAR
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: width * 0.03
  },
  scrollView: {
    flex: 1
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: usePercentageHeight(8)
  },
  titleText: {
    fontSize: useFontScale(32),
    fontFamily: FONTS.REGULAR,
    marginVertical: height * 0.10,
    alignSelf: 'center'
  },
  inputContainer: {
    marginBottom: height * 0.015
  },
  inputField: {
    marginBottom: height * 0
  },
  inputIcon: {
    paddingHorizontal: usePercentageWidth(3)
  },
  errorText: {
    fontSize: fontSizes.normalText,
    color: COLORS.red,
    paddingLeft: 4
  },
  spacer: {
    height: usePercentageHeight(2.5)
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    paddingRight: 4
  },
  forgotPasswordText: {
    color: COLORS.blue,
    fontSize: fontSizes.medium,
    fontFamily: FONTS.REGULAR
  },
  registerContainer: {
    alignItems: 'center',
    marginTop: height * 0.05
  },
  registerRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  registerLink: {
    color: COLORS.blue
  },
  loginButton: {
    position: 'absolute',
    bottom: usePercentageHeight(8),
    left: 0,
    right: 0,
    marginHorizontal: width * 0.03,
    height: usePercentageHeight(6.5),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary
  },
  loginButtonText: {
    fontSize: useFontScale(26),
    color: COLORS.white
  }
})
