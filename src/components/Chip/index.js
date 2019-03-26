import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet } from 'react-native';

import theme from 'theme';

const styles = StyleSheet.create({
  container: {
    paddingRight: 5,
    paddingBottom: 5
  },
  chipText: {
    fontSize: 11,
    paddingHorizontal: 10,
    textTransform: 'uppercase'
  },
  chip: {
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 25
  }
});

const Chip = props => {
  const { text, backgroundColor } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.chip, { backgroundColor }]}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.chipText}>
          {text}
        </Text>
      </View>
    </View>
  );
};

Chip.defaultProps = {
  backgroundColor: theme.disabled
};

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
};

export default Chip;
