import { Text, SafeAreaView, Image, Button } from 'react-native';
import { warningErrorImage } from '@assets/images';
import globalAppStyles from '@styles/global';
import styles from './styles';
import { useState } from 'react';

type ErrorScreenProps = {
  error: string;
  onRetry: () => void;
};

const ErrorScreen = ({ error, onRetry }: ErrorScreenProps) => {
  const globalStyles = globalAppStyles();

  const message = error.slice(7);

  return (
    <SafeAreaView style={[globalStyles.screen, globalStyles.flexColumn]}>
      <Image
        source={warningErrorImage}
        style={styles.imageView}
      />
      <Text style={styles.errorHeading}>Oops Error Occurred</Text>
      <Text style={styles.message}>{message}</Text>
      <Button
        title="Retry"
        onPress={onRetry}
      />
    </SafeAreaView>
  );
};

export default ErrorScreen;
