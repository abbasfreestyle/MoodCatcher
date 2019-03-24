import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { withAuthenticator } from 'aws-amplify-react-native';
import LinearGradient from 'react-native-linear-gradient';

const theme = {
  container: '#439',
  amazonSignInButton: '#439'
};

const signUpConfig = {
  header: 'Welcome!',
  defaultCountryCode: '44',
  hideDefaults: true,
  signUpFields: [
    {
      label: 'Name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string'
    }
  ]
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// eslint-disable-next-line
class App extends React.Component {
  render() {
    return (
      <LinearGradient
        style={styles.container}
        colors={['#439', '#309', '#539']}
      >
        <View>
          <Text>Welcome to mood catcher</Text>
          <Text>Tell me how you feel</Text>
          <Text>Look back on my feelings</Text>
        </View>
      </LinearGradient>
    );
  }
}

export default withAuthenticator(App, {
  includeGreetings: true,
  theme,
  signUpConfig
});
