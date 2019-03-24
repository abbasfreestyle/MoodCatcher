import React from 'react';

import {
  SafeAreaView,
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

// import { setTopLevelNavigator } from 'utils/navigationService';

import HomeScreen from 'screens/Home';

const Screens = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(Screens);

const App = () => {
  return (
    <SafeAreaView flex={1} backgroundColor="#EEE">
      <AppContainer
      // ref={navigatorRef => {
      //   setTopLevelNavigator(navigatorRef);
      // }}
      />
    </SafeAreaView>
  );
};

export default App;
