import { RefObject } from 'react';
import {
  EnterKeyHintTypeOptions,
  GestureResponderEvent,
  InputModeOptions,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputEndEditingEventData,
  TextInputProps,
  TextInputSubmitEditingEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';

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
}
