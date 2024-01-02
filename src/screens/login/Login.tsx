import {Button} from '@ui-kitten/components';
import {StyleSheet, Text, View} from 'react-native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

function Login() {
  const rnBiometrics = new ReactNativeBiometrics();
  async function isSensorAvailable() {
    const isDensorAvailable = await rnBiometrics.isSensorAvailable();
    console.log(isDensorAvailable);
  }

  async function createKeys() {
   try {
    const createKeys = await rnBiometrics.createKeys();
    console.log(createKeys);
   } catch (error) {
    // Error generating public private keys
    console.log('error createKeys:', error.message)
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
   
    let payload ='some message';
    const createSignature = await rnBiometrics.createSignature({
      promptMessage: 'Sign in',
      payload: payload,
    });
    console.log(createSignature);
   } catch (error) {
    // Error generating signature: No installed provider supports this key: (null)
    // Error generating signature: Key permanently invalidated
    console.log('error createsignature:',error.message)
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
    console.log('error simple:',error.message)
   }
  
  }

  return (
    <View style={{flex:1,justifyContent:'space-between'}}>
      <Button style={styles.box} onPress={() => isSensorAvailable()}>isSensorAvailable</Button>
      <Button style={styles.box} onPress={() => createKeys()}>createKeys</Button>
      <Button style={styles.box} onPress={() => biometricKeysExist()}>biometricKeysExist</Button>
      <Button style={styles.box} onPress={() => deleteKeys()}>deleteKeys</Button>
      <Button style={styles.box} onPress={() => createSignature()}>createSignature</Button>
      <Button style={styles.box} onPress={() => simplePrompt()}>simplePrompt</Button>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({

    box: {
      width: 200,
      height: 50,
    }
})
