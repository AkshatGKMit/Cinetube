import { useContext, useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import SessionContext from '@contexts/SessionContext';
import Icon from '@components/icon';
import { guestSessionTimerStyles } from './styles';

const GuestSessionTimer = () => {
  const styles = guestSessionTimerStyles();

  const { session, logOut } = useContext(SessionContext);

  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    const expirationTime = new Date(session!.expiresAt!).getTime();

    function updateTimeLeft() {
      const remainingTime = Math.max(0, Math.floor((expirationTime - Date.now()) / 1000));
      setTimeLeft(remainingTime);
    }

    updateTimeLeft();

    const timerId = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(timerId);
  }, [session]);

  useEffect(() => {
    if (timeLeft <= 0) {
      Alert.alert(
        'Session Expiration',
        'Your guest session has expired. You will be logged out shortly.',
        [{ text: 'OK', onPress: () => logOut(true) }],
        { cancelable: false },
      );
      return;
    } else if (timeLeft === 600) {
      Toast.show({
        text1: 'Guest Session Reminder',
        text2: 'You have 10 minutes left in your session.',
        visibilityTime: 3000,
        swipeable: true,
      });
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');

    return `${minutes}:${secs}`;
  };

  return (
    <View style={styles.view}>
      <Icon
        family="MaterialIcons"
        name="timer"
        color={styles.timerText.color}
        size={styles.timerText.fontSize * 1.25}
      />
      <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
    </View>
  );
};

export default GuestSessionTimer;
