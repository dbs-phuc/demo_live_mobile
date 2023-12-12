import {StyleSheet} from 'react-native';

export const StyleNotifi = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  logo: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  icon: {
    height: 50,
    width: 200,
  },
  message: {
    backgroundColor: '#9999',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    paddingBottom: 40,
    paddingLeft: 16,
    paddingRight: 16,
    minHeight:300
  },
  title: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  messageNotifi: {
    fontSize: 16,
    color: 'black',

  }

});
