import { ReactNode, RefObject } from 'react';
import {
  EnterKeyHintTypeOptions,
  GestureResponderEvent,
  InputModeOptions,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInputEndEditingEventData,
  TextInputProps,
  TextInputSubmitEditingEventData,
  TextStyle,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

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

  type TextFieldProps = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    ref?: RefObject<TextInput>;
    keyboardType?: KeyboardTypeOptions;
    inputMode?: InputModeOptions;
    enterKeyHint?: EnterKeyHintTypeOptions;
    onEndEditing?: (e?: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
    onSubmitEditing?: (e?: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
    autoFocus?: boolean;
    label?: string;
    prefixIcon?: IconProps;
    suffixIcon?: IconProps;
    suffixIconButton?: IconBtnProps;
    isPassword?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<TextStyle>;
    errorMsg?: string;
    addOns?: TextInputProps;
  };

  type ActionButtonProps = {
    children: ReactNode | string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
    loading?: boolean;
    addOns?: TouchableWithoutFeedbackProps;
  };
  
  type LoaderProps = {
    color?: string;
    size?: number | 'small' | 'large';
  };
}
