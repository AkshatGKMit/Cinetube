import Colors, { Dark, DarkOpacity, Light, LightOpacity } from '@constants/colors';

const Theme: Theme = {
  light: {
    screenBG: Colors.white.whiteEe,
    statusBar: Light.c1,
    defaultIcon: Colors.black.opacityF,
    textfield: {
      label: Colors.darkGrey.opacityC,
      focusedPrimary: Light.c1,
      focusedBorder: Light.c1,
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
      focusedBorder: Light.c1,
      focusedItemBG: LightOpacity.c1o15,
      text: Colors.black.opacityC,
      placeholder: Colors.darkGrey.opacityC,
      ddShadow: Colors.black.opacityF,
    },
    actionButton: {
      background: Light.c1,
      text: Colors.white.opacityF,
      disabledBG: Colors.lightGrey.opacityA,
      disabledText: Colors.darkGrey.opacityF,
    },
  },
  dark: {
    screenBG: Colors.black.black11,
    statusBar: Dark.c1,
    defaultIcon: Colors.white.opacityF,
    textfield: {
      label: Colors.lightGrey.opacityF,
      focusedPrimary: Dark.c1,
      focusedBorder: Dark.c1,
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
      focusedBorder: Dark.c1,
      focusedItemBG: DarkOpacity.c1o15,
      text: Colors.white.opacityC,
      placeholder: Colors.lightGrey.opacityC,
      ddShadow: Colors.white.opacityF,
    },
    actionButton: {
      background: Dark.c1,
      text: Colors.white.opacityF,
      disabledBG: Colors.darkGrey.opacityA,
      disabledText: Colors.lightGrey.opacityF,
    },
  },
};

export default Theme;
