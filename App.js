import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import Tabs from './src/navigation/Tabs';
import Stack from './src/navigation/Stack';
import Root from './src/navigation/Root';

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    // preloading APIs, assets or database..
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // await Font.loadAsync(Ionicons.load);
  };

  if (!ready) {
    return <AppLoading onFinish={onFinish} onError={console.error} startAsync={startLoading} />;
  }

  // loading done
  return (
    <NavigationContainer>
      <Root />
      {/* <Tabs /> */}
      {/* <Stack /> */}
    </NavigationContainer>
  );
}
