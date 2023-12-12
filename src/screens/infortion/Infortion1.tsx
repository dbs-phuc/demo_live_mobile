import {  ScrollView, Text, View } from 'react-native';
import LogoLive from '../../assets/images/live_logo.svg';
import TEXT from '../../assets/i18n/jp.json';
import { StyleCommon } from '../../common/style';
import { Button } from '@ui-kitten/components';
import { StyleNotifi } from '../notification_live_login/NotificationLongin.style';

function Infortion1() {
  return (
    <View style={StyleNotifi.container}>
      <ScrollView>
        <View style={StyleNotifi.logo}>
          <LogoLive style={StyleNotifi.icon} />
        </View>
        <View style={StyleNotifi.message}>
          <Text style={[StyleNotifi.title, { marginTop: 20, marginBottom: 20 }]}>
            {TEXT.LOGIN.LOGIN_ID}
          </Text>
          <Text style={StyleNotifi.messageNotifi}>
        【実装作業】【コントロールPC】画面No.
        </Text>
          <Text style={[StyleCommon.text,{color: 'red',marginTop: 10}]}>
              2023/2/22 15:30~2023/2/22 16:00
          </Text>
        </View>
        <Button style={{width:'30%', alignSelf:'center'}}>Clcik</Button>
      </ScrollView>
    </View>
  );
}
export default Infortion1;
