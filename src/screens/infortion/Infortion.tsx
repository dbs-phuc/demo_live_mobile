import {  ScrollView, Text, View } from 'react-native';
import LogoLive from '../../assets/images/live_logo.svg';
import TEXT from '../../assets/i18n/jp.json';
import { StyleCommon } from '../../common/style';
import { Button } from '@ui-kitten/components';
import { StyleNotifi } from '../notification_live_login/NotificationLongin.style';

function Infortion() {
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
        【実装作業】【コントロールPC】画面No.1像ダウンロードボタンの表示設定ができる機能を追加する/ 【CONTROL PC】MÀN HÌNH NO.121. CÀI ĐẶT HIỂN THỊ MENU: BỔ SUNG CHỨC NĂNG CÓ THỂ CÀI ĐẶT HIỂN THỊ CỦA BUTTON DOWNLOAD ẢNH CỦA RECORD LIST
          </Text>
        
        </View>
        <Button style={{width:'30%', alignSelf:'center'}}>Clcik</Button>
      </ScrollView>
    </View>
  );
}
export default Infortion;
