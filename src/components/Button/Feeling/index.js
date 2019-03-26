import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Animated, View, Text, StyleSheet } from 'react-native';

import { timing } from 'utils/animation';

import Touchable from 'components/Touchable';
import Grid from 'components/Grid';

import theme from 'theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  text: {
    color: theme.onSecondary,
    fontSize: 18,
    fontWeight: '400',
    textTransform: 'uppercase'
  }
});

class Feeling extends PureComponent {
  constructor(props) {
    super(props);
    this.color = new Animated.Value(props.selected ? 0 : 100);
  }

  componentDidUpdate(prevProps) {
    const { selected } = this.props;
    if (prevProps.selected !== selected) {
      timing(this.color, selected ? 0 : 100, 200).start();
    }
  }

  render() {
    const { children, onPress, flex, margin, ...touchableProps } = this.props;
    const backgroundColor = this.color.interpolate({
      inputRange: [0, 100],
      outputRange: [theme.secondary, theme.disabled]
    });
    return (
      <Grid.Row margin={margin}>
        <View flex={flex ? 1 : 0}>
          <Touchable onPress={onPress} borderRadius={5} {...touchableProps}>
            <Animated.View
              style={[styles.container, { backgroundColor }]}
              pointerEvents="box-only"
            >
              <Text style={styles.text}>{children}</Text>
            </Animated.View>
          </Touchable>
        </View>
      </Grid.Row>
    );
  }
}

Feeling.defaultProps = {
  flex: false,
  margin: 0,
  selected: false
};

Feeling.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  flex: PropTypes.bool,
  margin: PropTypes.number
};

export default Feeling;
