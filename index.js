import { AppRegistry } from 'react-native';

import Amplify from '@aws-amplify/core';

import config from './setup/aws-exports';
import App from './src';
import { name as appName } from './app.json';

Amplify.configure(config);

AppRegistry.registerComponent(appName, () => App);
