import { useContext } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import ThemeContext from '@contexts/ThemeContext';

function globalStyles() {
  const { theme } = useContext(ThemeContext);

  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.screenBG,
    },
    statusBarView: {
      height: StatusBar.currentHeight,
      width: '100%',
      backgroundColor: theme.statusBar,
    },
    flexRow: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    flexColumn: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  });
}

export default globalStyles;
