import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';

import theme from 'theme';

const isIos = Platform.OS === 'ios';

const styles = StyleSheet.create({
  overflow: {
    overflow: 'hidden'
  }
});

const Touchable = ({ children, borderRadius, rippleColor, ...props }) => {
  const Button =
    isIos || Platform.Version < 21
      ? TouchableWithoutFeedback
      : TouchableNativeFeedback;
  const androidRipple = !isIos
    ? {
        background: TouchableNativeFeedback.Ripple(rippleColor),
        useForeground: true
      }
    : undefined;
  return (
    <Button {...androidRipple} {...props}>
      <View style={[styles.overflow, { borderRadius }]}>{children}</View>
    </Button>
  );
};

Touchable.defaultProps = {
  borderRadius: 0,
  rippleColor: theme.primary
};

Touchable.propTypes = {
  children: PropTypes.node.isRequired,
  borderRadius: PropTypes.number,
  rippleColor: PropTypes.string
};

export default Touchable;
