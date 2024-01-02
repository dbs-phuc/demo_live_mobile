import {StyleSheet} from 'react-native';

export const StyleNotifi = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15
  },
  logo: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    marginTop: 56
  },
  icon: {
    height: '100%',
    width: 150,
  },
  message: {
    backgroundColor: 'rgba(142, 152, 159, 0.07)',
    width: '100%',
    marginTop: 16,
    minHeight:336
  },
  title: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    height:24,
  },
  messageNotifi: {
    fontSize: 16,
    color: 'black',
    marginTop: 16

  }

});
