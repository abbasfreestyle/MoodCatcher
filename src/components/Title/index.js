import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  // eslint-disable-next-line
  text: {
    fontWeight: '500',
    fontSize: 30,
    color: 'white'
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
