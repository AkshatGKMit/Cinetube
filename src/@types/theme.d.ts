declare global {
  type ThemeMode = 'light' | 'dark';

  interface ThemeColors {
    statusBar: string;
    screenBG: string;
    defaultIcon: string;
    textfield: {
      focusedPrimary: string;
      unfocusedPrimary: string;
      label: string;
      focusedBorder: string;
      unFocusedBorder: string;
      text: string;
      error: string;
      errorBorder: string;
      focusedPlaceholder: string;
      unfocusedPlaceholder: string;
      placeholderError: string;
    };
    dropdown: {
      focusedBorder: string;
      text: string;
      background: string;
      focusedItemBG: string;
      placeholder: string;
      ddShadow: string;
    };
  }

  interface Theme {
    light: ThemeColors;
    dark: ThemeColors;
  }
}

export {};
