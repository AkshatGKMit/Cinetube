import { Text, SafeAreaView } from 'react-native';
import PlatformStatusBar from '@components/platformStatusBar';
import globalStyles from '@styles/global';

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
