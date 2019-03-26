import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Animated, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

import { timing } from 'utils/animation';

import face from 'assets/animations/mood.json';

const styles = size =>
  StyleSheet.create({
    logo: {
      height: size,
      width: size
    }
  });

class Face extends Component {
  progress = new Animated.Value(0.5);

  componentDidMount() {
    const { progress } = this.props;
    timing(this.progress, progress, 500).start();
  }

  componentDidUpdate() {
    const { progress } = this.props;
    timing(this.progress, progress, 500).start();
  }

  render() {
    const { size } = this.props;
    return (
      <LottieView
        // ref={ref => {
        //   this.face = ref;
        // }}
        loop={false}
        progress={this.progress}
        source={face}
        style={styles(size).logo}
      />
    );
  }
}

Face.defaultProps = {
  size: 75
};

Face.propTypes = {
  progress: PropTypes.number.isRequired,
  size: PropTypes.number
};

export default Face;
