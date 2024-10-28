import ThemeContext from '@contexts/ThemeContext';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';

const styles = () => {
  const {
    theme: { actionButton: theme },
  } = useContext(ThemeContext);

  return StyleSheet.create({
    button: {
      backgroundColor: theme.background,
      borderRadius: 30,
      paddingVertical: 12,
      paddingHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: theme.text,
      fontSize: 16,
      fontWeight: '600',
    },
    disabledBG: {
      backgroundColor: theme.disabledBG,
    },
    disabledText: {
      color: theme.text,
    },
    pressIn: {
      opacity: 0.75,
      marginHorizontal: 2,
    },
  });
};

export default styles;
