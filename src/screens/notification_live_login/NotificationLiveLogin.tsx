import {Text, View} from 'react-native';
import {StyleNotifi} from './NotificationLongin.style';
import LogoLive from '../../assets/images/live_logo.svg';
import TEXT from '../../assets/i18n/jp.json';

function NotifiLogin() {
  return (
    <View style={StyleNotifi.container}>
      <View style={StyleNotifi.logo}>
        <LogoLive style={StyleNotifi.icon} />
      </View>
      <View style={StyleNotifi.message}>
        <Text style={[StyleNotifi.title, {marginTop: 20, marginBottom: 20}]}>
          {TEXT.LOGIN.LOGIN_ID}
        </Text>
      </View>
    </View>
  );
}
export default NotifiLogin;
