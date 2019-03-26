import { AppRegistry } from 'react-native';

import Amplify from '@aws-amplify/core';

import { name as appName } from './app.json';
import config from './setup/aws-exports';
import App from './src';

Amplify.configure(config);

AppRegistry.registerComponent(appName, () => App);
