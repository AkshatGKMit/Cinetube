declare global {
  type ThemeMode = 'light' | 'dark';

  interface ThemeColors {
    statusBar: string;
    screenBG: string;
  }

  interface Theme {
    light: ThemeColors;
    dark: ThemeColors;
  }
}

export {};
