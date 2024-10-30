import { StyleSheet } from 'react-native';
import Colors from '@constants/colors';

const styles = StyleSheet.create({
  errorView: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageView: {
    width: '25%',
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  errorHeading: {
    fontSize: 35,
    fontWeight: '800',
    color: Colors.black.opacityF,
    marginBottom: 5,
  },
  message: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default styles;
