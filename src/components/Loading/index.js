import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

import loading from 'assets/animations/loading.json';

const styles = size => {
  return StyleSheet.create({
    logo: {
      height: size,
      width: size
    }
  });
};
const Loading = props => {
  const { size } = props;
  return <LottieView source={loading} autoPlay style={styles(size).logo} />;
};

Loading.defaultProps = {
  size: 75
};

Loading.propTypes = {
  size: PropTypes.number
};

export default Loading;
