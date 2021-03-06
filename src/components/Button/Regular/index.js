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
    color: theme.onPrimary,
    fontSize: 18,
    fontWeight: '400',
    textTransform: 'uppercase'
  }
});

class Regular extends PureComponent {
  constructor(props) {
    super(props);
    this.color = new Animated.Value(props.disabled ? 0 : 100);
  }

  componentDidUpdate(prevProps) {
    const { disabled } = this.props;
    if (prevProps.disabled !== disabled) {
      timing(this.color, disabled ? 0 : 100, 200).start();
    }
  }

  render() {
    const { children, onPress, disabled, flex, margin, ...props } = this.props;
    const backgroundColor = this.color.interpolate({
      inputRange: [0, 100],
      outputRange: [theme.disabled, theme.primary]
    });
    return (
      <Grid.Row margin={margin}>
        <View flex={flex ? 1 : 0}>
          <Touchable
            disabled={disabled}
            onPress={onPress}
            rippleColor={theme.onPrimary}
            borderRadius={5}
            {...props}
          >
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

Regular.defaultProps = {
  flex: false,
  margin: 0,
  disabled: false
};

Regular.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  flex: PropTypes.bool,
  margin: PropTypes.number
};

export default Regular;
