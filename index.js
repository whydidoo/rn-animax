/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Application } from './src/index';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Application);
