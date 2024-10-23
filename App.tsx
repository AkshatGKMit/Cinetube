import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContextProvider } from '@contexts/ThemeContext';
import WrappedApp from '@screens/index';

const App = () => {
  return (
    <ThemeContextProvider>
      <SafeAreaProvider>
        <WrappedApp />
      </SafeAreaProvider>
    </ThemeContextProvider>
  );
};

export default App;
