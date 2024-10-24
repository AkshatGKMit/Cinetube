import { useContext } from 'react';
import { View, StatusBar } from 'react-native';
import ThemeContext from '@contexts/ThemeContext';
import { isAndroid } from '@helpers/helpers';
import styles from './styles';

const PlatformStatusBar = () => {
  const { theme } = useContext(ThemeContext);

  if (isAndroid) {
    return (
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor={theme.statusBar}
      />
    );
  }

  return <View style={styles().iosStatusBar} />;
};

export default PlatformStatusBar;
