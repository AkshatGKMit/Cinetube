import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorageManager from '@storage/AsyncStorageManager';
import { ThemeContextProvider } from '@contexts/ThemeContext';
import { AppContainer } from '@screens/index';
import ErrorBoundary from '@config/ErrorBoundary';

const App = () => {
  useEffect(() => {
    AsyncStorageManager.getInstance();
  }, []);

  return (
    <ErrorBoundary>
      <ThemeContextProvider>
        <SafeAreaProvider>
          <AppContainer />
        </SafeAreaProvider>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
};

export default App;
