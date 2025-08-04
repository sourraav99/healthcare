import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './main/mainStack';
import AuthStack from './auth/authStack';
import { SplashScreen } from '../layouts';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

const RootStack = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      // const userToken = null; 
      // setIsLoggedIn(!!userToken);
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
