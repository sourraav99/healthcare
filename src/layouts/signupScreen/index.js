import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../../components/wrapper'
import { fontSizes, height, useFontScale, usePercentageHeight, usePercentageWidth, width } from '../../hooks/responsive'
import { FONTS } from '../../res/fonts'
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6'
import { COLORS } from '../../res/colors'
import InputField from '../../components/inputField'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextComp from '../../components/textComp'
import { emailRegex } from '../loginScreen'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { SCREENS } from '..'


const SignupScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' })


  const handleRegister = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

    const newErrors = { email: '', password: '', confirmPassword: '' }
    if (!email.trim()) {
      newErrors.email = 'Email is required. *'
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required. *'
    } else if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 8 characters, with 1 uppercase, 1 lowercase, and 1 special character.*';
    }
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password. *'
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Password do not match.';
    }
    setErrors(newErrors)
    const hasErrors = Object.values(newErrors).some(Boolean)
    if (!hasErrors) {
      navigation.navigate(SCREENS.PRE_LOADING, { email: email, password: password, comingFrom: SCREENS.SIGNUP })
    }
  }



  const handleLogin = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: SCREENS.LOGIN },
        ],
      })
    )
  }

  return (
    <Wrapper
      headerStyles={styles.headerStyles}
      headerChildren={
        <TextComp style={styles.headerText}>SignUp</TextComp>
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
        >
          <TextComp style={styles.titleText}>HealthCare</TextComp>

          <View style={styles.inputContainer}>
            <InputField
              containerStyle={styles.inputField}
              label='Email'
              value={email}
              onChangeText={setEmail}
              onFocus={() => setErrors(prev => ({ ...prev, email: '' }))}
              onBlur={() => setErrors(prev => ({ ...prev, email: '' }))}
              icon={<FontAwesome6 name='envelope' size={20} color={COLORS.text} iconStyle='regular'
                style={styles.inputIcon} />}
            />
            {/* <TextComp style={styles.errorText}>Email is required *</TextComp> */}
            {errors.email ? <TextComp style={styles.errorText}>{errors.email}</TextComp> : null}

          </View>

          <View style={styles.spacer} />

          <View style={styles.inputContainer}>
            <InputField
              label='Password'
              value={password}
              onChangeText={setPassword}
              onFocus={() => setErrors(prev => ({ ...prev, password: '' }))}
              onBlur={() => setErrors(prev => ({ ...prev, password: '' }))}
              containerStyle={styles.inputField}
              icon={<FontAwesome6 name='lock' size={20} color={COLORS.text} iconStyle='solid'
                style={styles.inputIcon} />}
            />
            {errors.password ? <TextComp style={styles.errorText}>{errors.password}</TextComp> : null}
          </View>

          <View style={styles.spacer} />

          <View style={styles.inputContainer}>
            <InputField
              label='Confirm Password'
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              onFocus={() => setErrors(prev => ({ ...prev, confirmPassword: '' }))}
              onBlur={() => setErrors(prev => ({ ...prev, confirmPassword: '' }))}
              containerStyle={styles.inputField}
              icon={<FontAwesome6 name='lock' size={20} color={COLORS.text} iconStyle='solid'
                style={styles.inputIcon} />}
            />
            {/* <TextComp style={styles.errorText}>Confirm password doesn't match.</TextComp> */}
            {errors.confirmPassword ? <TextComp style={styles.errorText}>{errors.confirmPassword}</TextComp> : null}

          </View>

          <View style={styles.loginContainer}>
            <View style={styles.loginRow}>
              <TextComp>Already Have an Account? </TextComp>
              <TouchableOpacity onPress={handleLogin}>
                <TextComp style={styles.loginLink}>Click here to Login</TextComp>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
          <TextComp style={styles.registerButtonText}>register</TextComp>
        </TouchableOpacity>
      </View>
    </Wrapper>
  )
}

export default SignupScreen

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
    paddingBottom: usePercentageHeight(13)
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
  loginContainer: {
    alignItems: 'center',
    marginTop: height * 0.05
  },
  loginRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  loginLink: {
    color: COLORS.blue
  },
  registerButton: {
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
  registerButtonText: {
    fontSize: useFontScale(26),
    color: COLORS.white
  }
})