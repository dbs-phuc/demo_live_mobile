import {Button} from '@ui-kitten/components';
import {StyleSheet, Text, View} from 'react-native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

function Login({navigation}: any) {
  const rnBiometrics = new ReactNativeBiometrics();
  async function isSensorAvailable() {
    const isDensorAvailable = await rnBiometrics.isSensorAvailable();
    console.log(isDensorAvailable);
    //ios "Error Domain=com.apple.LocalAuthentication Code=-7 \"No identities are enrolled.\"
    // "UserInfo={NSDebugDescription=No identities are enrolled., NSLocalizedDescription=Biometry is not enrolled."
    //không cấp quyền : "Error Domain=com.apple.LocalAuthentication Code=-6 \"User has denied the use of biometry for this app.\"->
    //UserInfo={NSDebugDescription=User has denied the use of biometry for this app., NSLocalizedDescription=Biometry is not available.}"}
  }

  async function createKeys() {
    try {
      const createKeys = await rnBiometrics.createKeys();
      console.log(createKeys);
    } catch (error: any) {
      // Error generating public private keys
      //ios
      //off biometric
      //-Key generation error: Error Domain=NSOSStatusErrorDomain Code=-25293 "Key generation failed, error -25293" UserInfo={numberOfErrorsDeep=0, NSDescription=Key generation failed, error -25293}
      console.log('error createKeys:', error.message);
    }
  }

  async function biometricKeysExist() {
    const biometricKeysExist = await rnBiometrics.biometricKeysExist();
    console.log(biometricKeysExist);
  }

  async function deleteKeys() {
    const deleteKeys = await rnBiometrics.deleteKeys();
    console.log(deleteKeys);
  }

  async function createSignature() {
    try {
      let payload = 'some message';
      const createSignature = await rnBiometrics.createSignature({
        promptMessage: 'Sign in',
        payload: payload,
      });
      console.log(createSignature);
    } catch (error) {
      // Error generating signature: No installed provider supports this key: (null)
      // Error generating signature: Key permanently invalidated

      //ios
      //Key not found: error item not found
      //Key not found: error item authentication failed
      console.log('error createsignature:', error.message);
    }
  }

  async function simplePrompt() {
    try {
      const simplePrompt = await rnBiometrics.simplePrompt({
        promptMessage: 'Sign in',
      });
      console.log(simplePrompt);
    } catch (error) {
      // No fingerprints enrolled.
      //ios Error Domain=com.apple.LocalAuthentication Code=-7 "No identities are enrolled." UserInfo={NSDebugDescription=No identities are enrolled., NSLocalizedDescription=Biometry is not enrolled.
      //không cấp quyền:  Error Domain=com.apple.LocalAuthentication Code=-6 "User has denied the use of biometry for this app." UserInfo={NSDebugDescription=User has denied the use of biometry for this app., NSLocalizedDescription=Biometry is not available.}
      console.log('error simple:', error.message);
    }
  }

  function recoverScreens(): void {
    navigation.navigate('Screens-3');
  }

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <Button style={styles.box} onPress={() => isSensorAvailable()}>
        isSensorAvailable
      </Button>
      <Button style={styles.box} onPress={() => createKeys()}>
        createKeys
      </Button>
      <Button style={styles.box} onPress={() => biometricKeysExist()}>
        biometricKeysExist
      </Button>
      <Button style={styles.box} onPress={() => deleteKeys()}>
        deleteKeys
      </Button>
      <Button style={styles.box} onPress={() => createSignature()}>
        createSignature
      </Button>
      <Button style={styles.box} onPress={() => simplePrompt()}>
        simplePrompt
      </Button>
      <Button style={styles.box} onPress={() => recoverScreens()}>
        Screens 003
      </Button>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 50,
  },
});
