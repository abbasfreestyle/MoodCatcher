import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet } from 'react-native';

import { Button, Title, Background } from 'components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
});

class Home extends React.Component {
  static navigationOptions = {
    title: 'Mood Catcher'
  };

  render() {
    const { navigation, screenProps } = this.props;
    console.log('screenProps', screenProps);
    const { username } = screenProps.authData;
    return (
      <Background>
        <View style={styles.container}>
          <Title>Hello {username}</Title>
          <Button.Card
            onPress={() => {
              navigation.navigate('SelectMood');
            }}
          >
            How are how you feeling?
          </Button.Card>
          <Button.Card
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          >
            Look back on my feelings
          </Button.Card>
        </View>
      </Background>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default Home;
