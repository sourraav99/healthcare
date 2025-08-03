import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { COLORS } from '../../res/colors';
import { FONTS } from '../../res/fonts';
import { fontSizes, height, useFontScale } from '../../hooks/responsive';


const SplashScreen = ({ onFinish }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timeout = setTimeout(() => {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 20,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        if (onFinish) onFinish();
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
 
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />
      <Animated.Text style={[styles.text, { opacity: opacityAnim }]}>
        Healthcare
      </Animated.Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    width: height * 0.2,
    height: height * 0.2,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
  },
  text: {
    fontSize: useFontScale(28),
    fontWeight: 'bold',
    color: COLORS.white,
    position: 'absolute',
  },
});

export default SplashScreen;

