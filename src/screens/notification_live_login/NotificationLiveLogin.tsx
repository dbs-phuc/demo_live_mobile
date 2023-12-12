import {  ScrollView, Text, View } from 'react-native';
import { StyleNotifi } from './NotificationLongin.style';
import LogoLive from '../../assets/images/live_logo.svg';
import TEXT from '../../assets/i18n/jp.json';
import { StyleCommon } from '../../common/style';
import { Button } from '@ui-kitten/components';

function NotifiLogin({navigation}:any) {
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
        【実装作業】【コントロールPC】画面No.121 メニュー表示設定：記録リストの画像ダウンロードボタンの表示設定ができる機能を追加する/ 【CONTROL PC】MÀN HÌNH NO.121. CÀI ĐẶT HIỂN THỊ MENU: BỔ SUNG CHỨC NĂNG CÓ THỂ CÀI ĐẶT HIỂN THỊ CỦA BUTTON DOWNLOAD ẢNH CỦA RECORD LIST
          </Text>
          <Text style={[StyleCommon.text,{color: 'red',marginTop: 10}]}>
              2023/2/22 15:30~2023/2/22 16:00
          </Text>
        </View>
        <Button style={{width:'30%', alignSelf:'center'}} onPress={()=>{navigation.navigate("InfortionMax")}}>Clcik</Button>
      </ScrollView>
    </View>
  );
}
export default NotifiLogin;
