import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

import theme from 'theme';

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  text: {
    color: theme.primary,
    fontWeight: '400',
    fontSize: 30
  }
});

const Title = props => {
  const { children } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export default Title;
