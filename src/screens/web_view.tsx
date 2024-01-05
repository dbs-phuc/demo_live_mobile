import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import { setUpdate } from './setLocal';



function ScreensWebView() {
//   function update() {
//         console.log('test')
//       localStorage.setItem("yourDataKey", JSON.stringify(12))
//   }
  const browserInjection = 
  useEffect(() => {
    console.log(setUpdate);
  });

  return (
    <View style={{height: '100%', width: '100%'}}>
      <WebView
        source={{uri: 'https://dimli5buwiz7y.cloudfront.net'}}
        injectedJavaScript={setUpdate}
        style={{flex:1}}
      />
    </View>
  );
}
export default ScreensWebView;
