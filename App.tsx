import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContextProvider } from '@contexts/ThemeContext';
import AppContainer from '@screens/index';

const App = () => {
  return (
    <ThemeContextProvider>
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    </ThemeContextProvider>
  );
};

export default App;
