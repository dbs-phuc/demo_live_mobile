import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import IconLive from '../assets/images/icon_live.svg';
import IconNotiFi from '../assets/images/icon_notification.svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreens';
import Login from '../screens/login/Login';
import IconHome from '../assets/images/icon_home_bottom.svg'

function MyTabs() {const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel:false,headerShown:false, }} >
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:({ color})=>(<IconHome ></IconHome>),tabBarActiveTintColor:'#0de1fd84'}} />
      <Tab.Screen name="Settings" component={Login} options={{tabBarIcon:IconNotiFi}}/> 
    </Tab.Navigator>
  );
}
function NavigationHome() {
    


  return (
    <SafeAreaView style={styled.container}>
      <View style={styled.header}>
        <View style={{width: '20%'}}>
          <IconLive></IconLive>
        </View>
        <View style={{width: '70%'}}>
          <Text numberOfLines={2} ellipsizeMode="tail">
            特別養護老人ホーム　富士苑 静岡太郎
          </Text>
        </View>
        <View style={{width: '10%'}}>
          <IconNotiFi />
        </View>
      </View>
      <View style={styled.center}>
        <MyTabs></MyTabs>
      </View>
    </SafeAreaView>
  );
}
export default NavigationHome;

const styled = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 56,
    width: '100%',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  center: {flex:1, backgroundColor:'white'},
  footer: {
    height: 56,
  },
});
