import { ScrollView, Text, View } from 'react-native';
import { StyleNotifi } from './NotificationLongin.style';
import LogoLive from '../../assets/images/live_logo.svg';
import TEXT from '../../assets/i18n/jp.json';
import { StyleCommon } from '../../common/style';
import { Button } from '@ui-kitten/components';
import Config from "react-native-config";

function NotifiLogin({ navigation }: any) {
 try {
  console.log(Config.API_URL)
 
 } catch (error) {
  console.log("hgh")
 } 
  return (
    <View style={StyleNotifi.container}>
      <ScrollView>
        <View style={StyleNotifi.logo}>
          <LogoLive style={StyleNotifi.icon} />
        </View>
        <View style={StyleNotifi.message}>
          <Text style={[StyleNotifi.title, { marginTop: 8 }]}>
            {TEXT.LOGIN.LOGIN_ID}
          </Text>
          <Text style={StyleNotifi.messageNotifi}>
            下記の時間帯でシステムメンテナンスを予定しています。</Text>
          <Text style={[StyleCommon.text, { color: 'red', marginTop: 10 }]}>
            2023/2/22 15:30~2023/2/22 16:00
          </Text>
          <Text>※上記時間帯でページが正しく表示されない 可能性があります。</Text>
          <Text>
            その際には、時間をあけて操作をお願いします。</Text>
        </View>
        <Button style={{ width: 96,height:48, alignSelf: 'center', marginTop:16 }} onPress={() => { navigation.navigate("InfortionMax") }}>Clcik</Button>
      </ScrollView>
    </View>
  );
}
export default NotifiLogin;
