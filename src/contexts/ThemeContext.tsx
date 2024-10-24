import { createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import ThemeColors from '@themes/themes';
import { defaultThemeContextValues } from '@constants/context';

const ThemeContext = createContext<ThemeCtxProps>(defaultThemeContextValues);

export const ThemeContextProvider = ({ children }: CtxProviderProps) => {
  const colorScheme = useColorScheme();

  const { theme: defaultTheme, isDark: defaultIsDark } = defaultThemeContextValues;

  const [theme, setTheme] = useState<ThemeColors>(defaultTheme);
  const [isDark, setIsDark] = useState<boolean>(defaultIsDark);

  useEffect(() => {
    if (colorScheme) {
      setTheme(ThemeColors[colorScheme]);
      setIsDark(colorScheme === 'dark');
    }
  }, [colorScheme]);

  const changeTheme = (themeMode: ThemeMode) => {
    setTheme(ThemeColors[themeMode]);
    setIsDark(themeMode === 'dark');
  };

  const ctxValues = { theme, changeTheme, isDark };

  return <ThemeContext.Provider value={ctxValues}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
