import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './main/mainStack';
import AuthStack from './auth/authStack';
import { SplashScreen } from '../layouts';
import { StatusBar } from 'react-native';

const RootStack = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      const userToken = 'smsnjsnj'; 
      setIsLoggedIn(!!userToken);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <NavigationContainer>
        {isLoggedIn ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

export default RootStack;
