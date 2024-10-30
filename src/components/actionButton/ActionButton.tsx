import { useState } from 'react';
import { ActivityIndicator, Text, TouchableWithoutFeedback, View } from 'react-native';
import Colors from '@constants/colors';
import { isString } from '@helpers/helpers';
import actionButtonStyles from './styles';
import Loader from '@components/loader';

const ActionButton = ({ children, onPress, style: customStyle, disabled, loading, addOns }: ActionButtonProps) => {
  const styles = actionButtonStyles();
  const [isPressIn, setIsPressIn] = useState(false);

  const handlePressIn = () => setIsPressIn(true);
  const handlePressOut = () => setIsPressIn(false);

  const buttonViewStyles = [
    styles.button,
    isPressIn ? styles.pressIn : null,
    disabled ? styles.disabledBG : null,
    customStyle,
  ];

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled || loading}
      {...addOns}
    >
      <View style={buttonViewStyles}>
        {loading ? (
          <Loader
            size={20}
            color={Colors.white.opacityF}
          />
        ) : isString(children) ? (
          <Text style={[styles.text, disabled ? styles.disabledText : null]}>{children}</Text>
        ) : (
          children
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ActionButton;
