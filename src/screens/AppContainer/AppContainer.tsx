import { Text, SafeAreaView } from 'react-native';
import PlatformStatusBar from '@components/platformStatusBar';
import globalStyles from '@themes/globalStyles';

const AppContainer = () => {
  return (
    <>
      <PlatformStatusBar />
      <SafeAreaView style={globalStyles().screen}>
        <Text>Cinetube</Text>
      </SafeAreaView>
    </>
  );
};

export default AppContainer;
