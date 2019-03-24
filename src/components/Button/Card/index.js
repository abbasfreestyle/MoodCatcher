import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Touchable from 'components/Touchable';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  // eslint-disable-next-line
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    borderRadius: 20,
    margin: 20
  },
  // eslint-disable-next-line
  text: {
    color: 'white',
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
