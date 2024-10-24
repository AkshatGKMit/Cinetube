import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ThemeContext from '@contexts/ThemeContext';

const styles = () => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  const { theme } = useContext(ThemeContext);

  return StyleSheet.create({
    iosStatusBar: {
      height: statusBarHeight,
      width: '100%',
      backgroundColor: theme.statusBar,
    },
  });
};

export default styles;
