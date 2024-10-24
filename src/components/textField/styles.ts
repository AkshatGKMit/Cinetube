import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import ThemeContext from '@contexts/ThemeContext';

const styles = () => {
  const {
    theme: { textfield: theme },
  } = useContext(ThemeContext);
  return StyleSheet.create({
    textfieldWrapper: {
      flexDirection: 'column',
      gap: 3,
    },
    label: {
      color: theme.label,
      fontWeight: '700',
      fontSize: 16,
    },
    textfield: {
      borderWidth: 0.5,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 7,
      height: 45,
      borderColor: theme.unFocusedBorder,
      borderRadius: 6,
      paddingHorizontal: 7,
      paddingVertical: 2,
    },
    textInput: {
      flex: 1,
      fontSize: 16,
      color: theme.text,
    },
    error: {
      color: theme.error,
      fontSize: 11,
      height: 11,
      marginBottom: 4,
    },
    errorTextfield: {
      borderColor: theme.errorBorder,
    },
    errorLabel: {
      color: theme.error,
    },
    focused: {
      color: theme.focusedPrimary,
      borderColor: theme.focusedBorder,
    },
  });
};

export default styles;
