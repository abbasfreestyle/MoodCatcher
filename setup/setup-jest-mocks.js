jest.mock('NativeAnimatedHelper');

jest.mock('react-navigation', () => ({
  createStackNavigator: screens => screens,
  createAppContainer: app => app
}));

jest.mock('aws-amplify-react-native', () => ({
  withAuthenticator: component => component
}));
