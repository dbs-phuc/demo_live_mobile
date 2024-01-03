import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import NotifiLogin from '../screens/notification_live_login/NotificationLiveLogin';
import Login from '../screens/login/Login';
import NavigatorInfortion from './NavigatrInfortion';
import Screens_3 from '../screens/screens-3/screens-3_view';
import NavigationHome from './NavigationHome';

const Stack = createNativeStackNavigator();

const NavigatorWrapper = ({navigation, route}: any) => {
  
  const isDarkMode = useColorScheme() === 'dark';
 
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
            <Stack.Screen name='NotifiLogin' component={NotifiLogin}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='InfortionMax' component={NavigatorInfortion}/>
            <Stack.Screen name='Screens-3' component={Screens_3}/>
            <Stack.Screen name='NavigationHome' component={NavigationHome}/>
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default NavigatorWrapper;
