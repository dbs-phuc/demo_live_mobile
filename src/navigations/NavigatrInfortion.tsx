import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import NotifiLogin from '../screens/notification_live_login/NotificationLiveLogin';
import Login from '../screens/login/Login';
import Infortion from '../screens/infortion/Infortion';
import Infortion1 from '../screens/infortion/Infortion1';
import { StyleNotifi } from '../screens/notification_live_login/NotificationLongin.style';

const Stack = createNativeStackNavigator();

const NavigatorInfortion = ({navigation, route}: any) => {
  
  const isDarkMode = useColorScheme() === 'dark';
 
  return (
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={StyleNotifi.container}>
            <View style={{height:'80%'}}>
                 <Stack.Navigator 
          initialRouteName="Infortion"
          screenOptions={{headerShown: false}}>
            <Stack.Screen name='Infortion1' component={Infortion1}/>
           
            <Stack.Screen name='Infortion' component={Infortion}/>
        </Stack.Navigator>
            </View>
           
        <View style={{height: '10%',width: '40%',flexDirection:'row',justifyContent:'space-evenly',alignSelf: 'center'}}>
          <View style={[StyleInfortion.radiu,{backgroundColor:'blue'}]}></View>
          <View style={StyleInfortion.radiu}></View>
          <View style={StyleInfortion.radiu}></View>
        </View>
        </View>
        
      </SafeAreaProvider>
  );
};

export const StyleInfortion = StyleSheet.create({
    radiu: {
        height: 20,
        width:20,
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:50,
        backgroundColor: '#9999'

    }
})
export default NavigatorInfortion;
