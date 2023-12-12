/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NavigatorWrapper from './src/navigations/NavigatorWrapper';

AppRegistry.registerComponent(appName, () => App);
