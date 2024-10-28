import { useContext, useEffect, useRef, useState } from 'react';
import { Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import ThemeContext from '@contexts/ThemeContext';
import Icon from '@components/icon';
import IconButton from '@components/iconButton';
import textfieldStyles from './styles';

const TextField = ({
  value,
  onChangeText,
  placeholder,
  label,
  ref,
  autoFocus,
  keyboardType,
  inputMode,
  enterKeyHint,
  onSubmitEditing,
  onEndEditing,
  errorMsg,
  isPassword,
  prefixIcon,
  suffixIcon,
  suffixIconButton,
  containerStyle,
  textInputStyle,
  addOns,
}: TextFieldProps) => {
  const {
    theme: { textfield: theme },
  } = useContext(ThemeContext);

  const inputRef = useRef<TextInput>(null);

  const [styles] = useState(textfieldStyles());
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleFocus = () => {
    const currentRef = ref ?? inputRef;
    currentRef.current?.focus();

    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const getColor = (isPlaceHolder = false) => {
    if (errorMsg) return isPlaceHolder ? theme.placeholderError : theme.error;
    return isFocused
      ? isPlaceHolder
        ? theme.focusedPlaceholder
        : theme.focusedPrimary
      : isPlaceHolder
      ? theme.unfocusedPlaceholder
      : theme.unfocusedPrimary;
  };

  const showPassword = () => setPasswordVisibility(true);
  const hidePassword = () => setPasswordVisibility(false);

  const showSuffixIconButton = suffixIconButton && !isPassword;
  const showSuffixIcon = suffixIcon && !isPassword;

  return (
    <TouchableWithoutFeedback onPress={handleFocus}>
      <View style={[styles.textfieldWrapper, containerStyle]}>
        {label ? (
          <Text
            style={[styles.label, isFocused ? styles.focused : null, errorMsg ? styles.errorLabel : null]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {label}
          </Text>
        ) : null}

        <View style={[styles.textfield, isFocused && styles.focused, errorMsg && styles.errorTextfield]}>
          {prefixIcon ? (
            <Icon
              family={prefixIcon.family}
              name={prefixIcon.name}
              size={prefixIcon.size ?? 16}
              color={prefixIcon.color ?? getColor()}
            />
          ) : null}

          <TextInput
            ref={ref ?? inputRef}
            value={value}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            keyboardType={keyboardType ?? 'default'}
            inputMode={inputMode ?? 'text'}
            autoComplete={'off'}
            onEndEditing={onEndEditing}
            enterKeyHint={enterKeyHint}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            placeholderTextColor={getColor(true)}
            secureTextEntry={isPassword && !passwordVisibility}
            autoFocus={autoFocus}
            style={[styles.textInput, textInputStyle]}
            autoCapitalize="none"
            {...addOns}
          />

          {isPassword ? (
            <IconButton
              icon={{
                family: 'Entypo',
                name: passwordVisibility ? 'eye' : 'eye-with-line',
                size: 18,
                color: getColor(),
              }}
              onPressIn={showPassword}
              onPressOut={hidePassword}
            />
          ) : null}

          {showSuffixIconButton ? (
            <IconButton
              icon={{
                family: isPassword ? 'Entypo' : suffixIconButton?.icon.family,
                name: isPassword ? (passwordVisibility ? 'eye-with-line' : 'eye') : suffixIconButton?.icon.name,
                size: suffixIconButton.icon.size ?? 18,
                color: suffixIconButton.icon.color ?? getColor(),
              }}
              onPressIn={isPassword ? showPassword : suffixIconButton.onPressIn}
              onPressOut={isPassword ? hidePassword : suffixIconButton.onPressOut}
              onPress={suffixIconButton.onPress}
            />
          ) : showSuffixIcon ? (
            <Icon
              family={suffixIcon.family}
              name={suffixIcon.name}
              size={suffixIcon.size ?? 16}
              color={getColor()}
            />
          ) : null}
        </View>
        <Text style={styles.error}>{errorMsg}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TextField;
