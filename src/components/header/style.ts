import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import ThemeContext from '@contexts/ThemeContext';

const styles = () => {
  const {
    theme: { header: theme },
  } = useContext(ThemeContext);

  return StyleSheet.create({
    header: {
      backgroundColor: theme.background,
      width: '100%',
      height: 50,
      padding: 4,
      paddingStart: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 4,
      borderBottomWidth: 0.1,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 1,
    },
    headerFlexStart: {
      justifyContent: 'flex-start',
    },
    headerText: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.content,
    },
    icon: {
      position: 'absolute',
      left: 0,
      marginLeft: 4,
    },
  });
};
export default styles;
