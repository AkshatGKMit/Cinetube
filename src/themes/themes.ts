import Colors, { Dark, DarkOpacity, Light, LightOpacity } from '@constants/colors';

const Theme: Theme = {
  light: {
    screenBG: Colors.white.whiteEe,
    statusBar: Light.shade1,
    defaultIcon: Colors.black.opacityF,
    textfield: {
      label: Colors.darkGrey.opacityC,
      focusedPrimary: Light.shade1,
      focusedBorder: Light.shade1,
      focusedPlaceholder: Light.focusedPlaceholder,
      text: Colors.black.black11,
      error: Light.error,
      errorBorder: Light.error,
      placeholderError: Light.placeholderError,
      unFocusedBorder: Colors.darkGrey.opacityC,
      unfocusedPlaceholder: Colors.darkGrey.opacityC,
      unfocusedPrimary: Colors.darkGrey.opacityC,
    },
    dropdown: {
      background: Colors.white.whiteDF,
      focusedBorder: Light.shade1,
      focusedItemBG: LightOpacity.c1o15,
      text: Colors.black.opacityC,
      placeholder: Colors.darkGrey.opacityC,
      ddShadow: Colors.black.opacityF,
    },
    actionButton: {
      background: Light.shade1,
      text: Colors.white.opacityF,
      disabledBG: Colors.lightGrey.opacityA,
      disabledText: Colors.darkGrey.opacityF,
    },
  },
  dark: {
    screenBG: Colors.black.black11,
    statusBar: Dark.shade1,
    defaultIcon: Colors.white.opacityF,
    textfield: {
      label: Colors.lightGrey.opacityF,
      focusedPrimary: Dark.shade1,
      focusedBorder: Dark.shade1,
      focusedPlaceholder: Dark.focusedPlaceholder,
      text: Colors.white.whiteEe,
      error: Dark.error,
      errorBorder: Dark.error,
      placeholderError: Dark.placeholderError,
      unFocusedBorder: Colors.lightGrey.opacityC,
      unfocusedPlaceholder: Colors.lightGrey.opacityC,
      unfocusedPrimary: Colors.lightGrey.opacityC,
    },
    dropdown: {
      background: Colors.black.black20,
      focusedBorder: Dark.shade1,
      focusedItemBG: DarkOpacity.shade1o15,
      text: Colors.white.opacityC,
      placeholder: Colors.lightGrey.opacityC,
      ddShadow: Colors.white.opacityF,
    },
    actionButton: {
      background: Dark.shade1,
      text: Colors.white.opacityF,
      disabledBG: Colors.darkGrey.opacityA,
      disabledText: Colors.lightGrey.opacityF,
    },
  },
};

export default Theme;
