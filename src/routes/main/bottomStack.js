import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, NearbyPharmacy, SCREENS } from '../../layouts';

const Tab = createBottomTabNavigator();
const BottomStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Tab.Screen name={SCREENS.NEARBY_PHARMA} component={NearbyPharmacy} />
    </Tab.Navigator>
  )
}

export default BottomStack