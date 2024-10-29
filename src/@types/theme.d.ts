declare global {
  type ThemeMode = 'light' | 'dark';

  interface ThemeColors {
    statusBar: string;
    screenBG: string;
    defaultIcon: string;
    primaryText: string;
    secondaryText: string;
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
    actionButton: {
      background: string;
      text: string;
      disabledBG: string;
      disabledText: string;
    };
    header: {
      background: string;
      content: string;
    };
    drawer: {
      background: string;
      routeContent: string;
      focusedRouteBG: string;
      focusedRouteFG: string;
    };
  }

  interface Theme {
    light: ThemeColors;
    dark: ThemeColors;
  }
}

export {};
