import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import Touchable from 'components/Touchable';
import Grid from 'components/Grid';

const styles = StyleSheet.create({
  // eslint-disable-next-line
  container: {
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  // eslint-disable-next-line
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    textTransform: 'uppercase'
  }
});

class Regular extends PureComponent {
  render() {
    const { children, onPress, flex, margin } = this.props;
    return (
      <Grid.Row margin={margin}>
        <View flex={flex ? 1 : 0}>
          <Touchable onPress={onPress} borderRadius={5}>
            <View style={styles.container}>
              <Text style={styles.text}>{children}</Text>
            </View>
          </Touchable>
        </View>
      </Grid.Row>
    );
  }
}

Regular.defaultProps = {
  onPress: () => {},
  flex: false,
  margin: 0
};

Regular.propTypes = {
  children: PropTypes.string.isRequired,
  flex: PropTypes.bool,
  margin: PropTypes.number,
  onPress: PropTypes.func
};

export default Regular;
