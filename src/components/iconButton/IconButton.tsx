import { TouchableHighlight } from 'react-native';
import Icon from '@components/icon';
import Colors from '@constants/colors';
import styles from './styles';

const IconButton = ({
  icon: { family, name, color, size },
  onPress,
  onPressIn,
  onPressOut,
  style,
  iconStyle,
  underlayColor,
}: IconBtnProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[styles.button, style]}
      underlayColor={underlayColor ?? Colors.darkGrey.opacity1}
    >
      <Icon
        family={family}
        name={name}
        color={color}
        size={size}
        style={iconStyle}
      />
    </TouchableHighlight>
  );
};

export default IconButton;
