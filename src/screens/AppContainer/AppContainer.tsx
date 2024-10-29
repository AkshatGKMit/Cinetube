import { Text, SafeAreaView } from 'react-native';
import PlatformStatusBar from '@components/platformStatusBar';
import globalAppStyles from '@themes/globalStyles';
import Toast from 'react-native-toast-message';
import { LoginScreen } from '@screens/index';

const AppContainer = () => {
  const globalStyles = globalAppStyles();

  return (
    <>
      <PlatformStatusBar />
      <SafeAreaView style={globalStyles.screen}>
        <LoginScreen />
        <Toast />
      </SafeAreaView>
    </>
  );
};

export default AppContainer;
