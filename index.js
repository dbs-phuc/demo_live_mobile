/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NavigatorWrapper from './src/navigations/navigations/NavigatorWrapper';

AppRegistry.registerComponent(appName, () => NavigatorWrapper);
