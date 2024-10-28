import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';

declare global {
  type IconBtnProps = {
    icon: IconProps;
    style?: StyleProp<ViewStyle>;
    iconStyle?: StyleProp<TextStyle>;
    underlayColor?: string;
    onPress?: (ev?: GestureResponderEvent) => void;
    onPressIn?: (ev?: GestureResponderEvent) => void;
    onPressOut?: (ev?: GestureResponderEvent) => void;
  };

  type LoaderProps = {
    color?: string;
    size?: number | 'small' | 'large';
  };
}
