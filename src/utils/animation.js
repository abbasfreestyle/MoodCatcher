import { Animated, Easing } from 'react-native';

export const timing = (
  target,
  toValue,
  duration,
  useNativeDriver = false,
  easing = Easing.inOut(Easing.ease)
) =>
  Animated.timing(target, {
    toValue,
    duration,
    useNativeDriver,
    easing
  });
