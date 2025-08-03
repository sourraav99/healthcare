import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ReminderScreen, SCREENS } from '../../layouts';
import BottomStack from './bottomStack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={SCREENS.BOTTOM} component={BottomStack} />
      <Stack.Screen name={SCREENS.REMINDER} component={ReminderScreen} />
    </Stack.Navigator>
  );
};

export default MainStack; 