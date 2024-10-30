import { useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import PlatformStatusBar from '@components/platformStatusBar';
import globalStyles from '@themes/globalStyles';

const AppContainer = () => {
  const netInfo = useNetInfo();

  useEffect(() => {
    const { isConnected } = netInfo;
    if (isConnected !== null) {
      if (!isConnected) throw new Error('No internet connection');
    }
  }, [netInfo]);

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
