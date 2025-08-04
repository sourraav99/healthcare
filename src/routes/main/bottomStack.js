import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, NearbyPharmacy, SCREENS } from '../../layouts';
import { COLORS } from '../../res/colors';
import { usePercentageHeight } from '../../hooks/responsive';
import {FontAwesome6} from '@react-native-vector-icons/fontawesome6';

const Tab = createBottomTabNavigator();
const BottomStack = () => {
  return (
    <Tab.Navigator
   
     screenOptions={{ 
      headerShown: false,
      tabBarStyle:{
        borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor:COLORS.grey,
      overflow: 'hidden',
      position: 'absolute',
      // height: usePercentageHeight(7.5),
      // tabBarShowLabel: false
      }

      }}>
      <Tab.Screen name={SCREENS.HOME} component={HomeScreen} options={{
      tabBarIcon: ({ focused }) => (
        <FontAwesome6
          name="house"
          size={22}
          color={!focused ? COLORS.text : COLORS.primary}
          iconStyle={'solid'}
        />
      ),
      tabBarLabel: () => null, 
    }}
 />
      <Tab.Screen name={SCREENS.NEARBY_PHARMA} component={NearbyPharmacy}
      options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesome6
            name="location-dot"
            size={22}
            color={!focused ? COLORS.text : COLORS.primary}
            iconStyle={'solid'}
          />
        ),
        tabBarLabel: () => null, 
      }}
       />
    </Tab.Navigator>
  )
}

export default BottomStack