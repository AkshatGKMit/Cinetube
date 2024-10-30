import { Text, SafeAreaView, Image } from 'react-native';
import { warningErrorImage } from '@assets/images';
import globalAppStyles from '@themes/globalStyles';
import styles from './styles';

const ErrorScreen = ({ error, onRetry }: ErrorScreenProps) => {
  const globalStyles = globalAppStyles();

  return (
    <SafeAreaView style={[globalStyles.screen, globalStyles.flexColumn]}>
      <Image
        source={warningErrorImage}
        style={styles.imageView}
      />
      <Text style={styles.errorHeading}>Oops! Error</Text>
      <Text style={styles.message}>{error}</Text>
    </SafeAreaView>
  );
};

export default ErrorScreen;
