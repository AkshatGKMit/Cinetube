import { Text, SafeAreaView } from 'react-native';
import PlatformStatusBar from '@components/platformStatusBar';
import globalStyles from '@styles/global';

const WrappedApp = () => {
  return (
    <>
      <PlatformStatusBar />
      <SafeAreaView style={globalStyles().screen}>
        <Text>Cinetube</Text>
      </SafeAreaView>
    </>
  );
};

export default WrappedApp;
