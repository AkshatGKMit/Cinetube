interface CtxProviderProps {
  children?: ReactNode;
}

interface ThemeCtxProps {
  theme: ThemeColors;
  isDark: boolean;
  changeTheme: (themeMode: ThemeMode) => void;
}
