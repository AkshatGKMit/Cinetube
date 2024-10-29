import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorageManager from '@storage/AsyncStorageManager';
import { ThemeContextProvider } from '@contexts/ThemeContext';
import { AppContainer } from '@screens/index';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    AsyncStorageManager.getInstance();
  }, []);

  return (
    <ThemeContextProvider>
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    </ThemeContextProvider>
  );
};

export default App;
