import React from 'react';

import {
  SafeAreaView,
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

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
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(Screens);

const App = () => {
  return (
    <SafeAreaView flex={1} backgroundColor="#EEE" forceInset={{ top: 'never' }}>
      <AppContainer
      // ref={navigatorRef => {
      //   setTopLevelNavigator(navigatorRef);
      // }}
      />
    </SafeAreaView>
  );
};

export default App;
