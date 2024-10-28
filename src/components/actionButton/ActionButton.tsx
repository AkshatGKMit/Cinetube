import { useState } from 'react';
import { ActivityIndicator, Text, TouchableWithoutFeedback, View } from 'react-native';
import Colors from '@constants/colors';
import { isString } from '@helpers/helpers';
import actionButtonStyles from './styles';

const ActionButton = ({ children, onPress, style: customStyle, disabled, loading, addOns }: ActionButtonProps) => {
  const [styles] = useState(actionButtonStyles());
  const [isPressIn, setIsPressIn] = useState(false);

  const handlePressIn = () => setIsPressIn(true);
  const handlePressOut = () => setIsPressIn(false);

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled || loading}
      {...addOns}
    >
      <View style={[styles.button, isPressIn ? styles.pressIn : null, disabled ? styles.disabledBG : null, customStyle]}>
        {loading ? (
          <ActivityIndicator
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
