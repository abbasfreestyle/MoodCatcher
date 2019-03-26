import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Touchable from 'components/Touchable';

import theme from 'theme';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 80,
    justifyContent: 'center'
  },
  // eslint-disable-next-line
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.secondary,
    borderRadius: 20,
    margin: 20,
    shadowColor: theme.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  text: {
    color: theme.onSecondary,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '400'
  }
});

class Card extends PureComponent {
  render() {
    const { children, onPress } = this.props;
    return (
      <View style={styles.container}>
        <Touchable onPress={onPress} borderRadius={20}>
          <View style={styles.button}>
            <Text style={styles.text}>{children}</Text>
          </View>
        </Touchable>
      </View>
    );
  }
}

Card.defaultProps = {
  onPress: () => {}
};

Card.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

export default Card;
