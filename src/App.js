
import { View, Text } from 'react-native'
import React from 'react'
import RootStack from './routes'

const App = () => {
  return (
    <RootStack />
  )
}

export default App

// import React, { useEffect, useRef, useState } from 'react';
// import {
//   View,
//   Text,
//   Animated,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const SplashScreen = ({ onFinish }) => {
//   const scaleAnim = useRef(new Animated.Value(1)).current;
//   const opacityAnim = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       Animated.parallel([
//         Animated.timing(scaleAnim, {
//           toValue: 20, 
//           duration: 1500,
//           useNativeDriver: true,
//         }),
//         Animated.timing(opacityAnim, {
//           toValue: 0,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//       ]).start(() => {
//         if (onFinish) onFinish();
//       });
//     }, 500);

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.circle,
//           {
//             transform: [{ scale: scaleAnim }],
//           },
//         ]}
//       />
//       <Animated.Text style={[styles.text, { opacity: opacityAnim }]}>
//         Healthcare
//       </Animated.Text>
//     </View>
//   );
// };

// const MainApp = () => (
//   <View style={[styles.container, { backgroundColor: '#f4f4f4' }]}>
//     <Text style={{ fontSize: 20 }}>Main App Content</Text>
//   </View>
// );

// const App = () => {
//   const [showSplash, setShowSplash] = useState(true);
//   return (
//     <SplashScreen onFinish={() => setShowSplash(false)} />
//   )

//   // return showSplash ? (
//   //   <SplashScreen onFinish={() => setShowSplash(false)} />
//   // ) : (
//   //   <MainApp />
//   // );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   circle: {
//     position: 'absolute',
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     backgroundColor: '#5391B4',
//   },
//   text: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     position: 'absolute',
//   },
// });

// export default App;
