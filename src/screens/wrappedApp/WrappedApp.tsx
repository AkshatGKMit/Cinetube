import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import PlatformStatusBar from '@components/PlatformStatusBar';
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
