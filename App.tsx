import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorageManager from '@storage/AsyncStorageManager';
import { ThemeContextProvider } from '@contexts/ThemeContext';
import AppContainer from '@screens/index';

const App = () => {
  AsyncStorageManager.getInstance();

  return (
    <ThemeContextProvider>
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    </ThemeContextProvider>
  );
};

export default App;
