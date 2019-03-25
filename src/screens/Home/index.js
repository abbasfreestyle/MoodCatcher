import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet } from 'react-native';

import { withAuthenticator } from 'aws-amplify-react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Button, Title } from 'components';

// const theme = {
//   container: {
//     backgroundColor: '#539'
//   },
//   signInButton: {
//     backgroundColor: '#439'
//   }
// };

const signUpConfig = {
  defaultCountryCode: '44',
  hideDefaults: true
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
});

class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const { navigation } = this.props;
    return (
      <LinearGradient
        style={styles.container}
        colors={['#439', '#309', '#539']}
      >
        <Title>Hello Name</Title>
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
      </LinearGradient>
    );
  }
}

App.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withAuthenticator(App, {
  signUpConfig
  // includeGreetings: true
});
