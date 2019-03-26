import React from 'react';

import {
  SafeAreaView,
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

import { withAuthenticator } from 'aws-amplify-react-native';

import theme from 'theme';

// import { setTopLevelNavigator } from 'utils/navigationService';

import HomeScreen from 'screens/Home';
import SelectMoodScreen from 'screens/SelectMood';
import AddCommentScreen from 'screens/AddComment';
import ThanksScreen from 'screens/Thanks';
import DashboardScreen from 'screens/Dashboard';

const Screens = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    SelectMood: { screen: SelectMoodScreen },
    AddComment: { screen: AddCommentScreen },
    Dashboard: { screen: DashboardScreen },
    Thanks: { screen: ThanksScreen }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.primary
      },
      headerTintColor: theme.onPrimary
    }
  }
);

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

const AppContainer = createAppContainer(Screens);

const AppWithAuth = withAuthenticator(
  props => (
    <AppContainer
      screenProps={props}
      // ref={navigatorRef => {
      //   setTopLevelNavigator(navigatorRef);
      // }}
    />
  ),
  {
    signUpConfig
    // includeGreetings: true
  }
);

const App = () => (
  <SafeAreaView flex={1} backgroundColor="#FFF" forceInset={{ top: 'never' }}>
    <AppWithAuth />
  </SafeAreaView>
);

export default App;
