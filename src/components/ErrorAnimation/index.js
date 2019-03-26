import React from 'react';
import { StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

import errorAnimation from 'assets/animations/error.json';

const styles = StyleSheet.create({
  emoji: {
    aspectRatio: 1.6,
    height: 200,
    width: 200
  }
});

const ErrorAnimation = () => (
  <LottieView
    style={styles.emoji}
    source={errorAnimation}
    resizeMode="cover"
    autoPlay
  />
);

export default ErrorAnimation;
