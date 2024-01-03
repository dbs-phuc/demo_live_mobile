import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dropdown} from 'react-native-element-dropdown';
import {useState} from 'react';
import { Button } from '@ui-kitten/components';

function Screens_3({navigation}: any) {
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.view,{marginTop:72}]}>
        <Text style={styles.text}>以下の情報を入力してください</Text>
      </View>
      <View style={styles.view}>
        <Text style={[styles.text,{fontWeight:'bold'}]}>ログイン事業所</Text>
        <Text style={styles.text}>特別養護老人ﾎｰﾑ　きみとべ</Text>
      </View>
      <View style={styles.view}>
        <Text style={[styles.text,{fontWeight:'bold'}]}>喜劇野コメ様との関係</Text>
        <Text style={styles.text}>家族・親族</Text>
      </View>
      <View style={[styles.view,{width:232}]}>
        <Text style={[styles.text,{fontWeight:'bold'}]}>続柄</Text>
        <Dropdown
          data={data}
          labelField={'label'}
          valueField={'value'}
          onChange={function (item: {label: string; value: string}): void {
            console.log(item);
          }}
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          placeholder={!isFocus ? data[0].label : '...'}></Dropdown>
      </View>
      <View style={styles.view}>
        <Text style={[styles.text,{height:48}]}>{"※登録した情報は、\nアカウント管理画面から変更できます。"}</Text>
      </View>
      <View style={styles.view}>
      <Button style={{width:100,alignSelf:'center',backgroundColor:"#007BD0"}} onPress={()=>{
        navigation.navigate('NavigationHome')}}>登録</Button>
      </View>
    </SafeAreaView>
  );
}
export default Screens_3;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    flex:1
  },
  view:{
  marginTop: 16,
  },
  text:{
    fontSize: 16,
    color: 'black',
    height: 24,
  alignContent:'center'

  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
