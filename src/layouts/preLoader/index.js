import { View } from 'react-native';
import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { LOTTIE } from '../../res/lottie';
import TextComp from '../../components/textComp';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { SCREENS } from '..';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/slices/authSlice';

const PreLoader = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { email, password, comingFrom } = route?.params || {};

  useEffect(() => {
    if (!email || !password || !comingFrom) {
      fallbackToSignup('Missing credentials or screen info');
      return;
    }

    if (comingFrom === SCREENS.SIGNUP) {
      createUser();
    } else if (comingFrom === SCREENS.LOGIN) {
      signInUser();
    } else {
      fallbackToSignup('Unknown screen source');
    }
  }, []);

  const fallbackToSignup = (msg) => {
    console.log(msg || 'Fallback triggered');
    Toast.show('Something went wrong. Please try again.');
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: SCREENS.SIGNUP }],
      })
    );
  };

  const fallbackToLogin = (msg) => {
    console.log(msg || 'Fallback triggered');
    Toast.show('Something went wrong. Please try again.');
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: SCREENS.LOGIN }],
      })
    );
  };

  const createUser = async () => {
    try {
      const res = await createUserWithEmailAndPassword(getAuth(), email, password);
      console.log('User account created:', JSON.stringify(res));
      Toast.show('User account created! Please login.');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: SCREENS.LOGIN }],
        })
      );
    } catch (error) {
      console.error('Signup Error:', error);
      switch (error.code) {
        case 'auth/email-already-in-use':
          Toast.show('This email is already in use.');
          break;
        case 'auth/invalid-email':
          Toast.show('Invalid email address.');
          break;
        case 'auth/weak-password':
          Toast.show('Password should be at least 6 characters.');
          break;
        default:
          Toast.show('Signup failed. Please try again later.');
          break;
      }
      fallbackToSignup();
    }
  };

  const signInUser = async () => {
    try {
      const res = await signInWithEmailAndPassword(getAuth(), email, password);
      console.log('User signed in:', JSON.stringify(res));
      const idToken = await res.user.getIdToken();
      // console.log(idToken);
      dispatch(setCredentials(idToken));
      Toast.show('Welcome back!');
      // navigation.dispatch(
      //   CommonActions.reset({
      //     index: 0,
      //     routes: [{ name: SCREENS.HOME }], // Replace with your target screen
      //   })
      // );
    } catch (error) {
      console.error('Login Error:', error);
      switch (error.code) {
        case 'auth/user-not-found':
          Toast.show('No user found with this email.');
          break;
        case 'auth/invalid-credential':
        case 'auth/wrong-password':
          Toast.show('Invalid credentials.');
          break;
        default:
          Toast.show('Login failed. Please try again later.');
          break;
      }
      fallbackToLogin();
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LottieView source={LOTTIE.loading} style={{ height: 150, width: 150 }} autoPlay loop />
      <TextComp>Please wait...</TextComp>
    </View>
  );
};

export default PreLoader;
