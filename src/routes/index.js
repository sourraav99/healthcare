import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './main/mainStack';
import AuthStack from './auth/authStack';
import { SplashScreen } from '../layouts';
// import AuthStack from './AuthStack';
// import MainStack from './MainStack';
// import SplashScreen from '../screens/SplashScreen'; // your custom splash screen

const RootStack = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // default false

  useEffect(() => {
    // Simulate async check (e.g., from storage or API)
    const checkAuth = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // simulate 2s splash
      // Replace below with real auth logic
      const userToken = null; // or something like AsyncStorage.getItem('token')
      setIsLoggedIn(!!userToken);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <NavigationContainer >
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootStack;
