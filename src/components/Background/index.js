import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import theme from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Background = props => {
  const { children, ...rest } = props;
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.background, theme.surface]}
      {...rest}
    >
      {children}
    </LinearGradient>
  );
};

Background.propTypes = {
  children: PropTypes.node.isRequired
};

export default Background;
