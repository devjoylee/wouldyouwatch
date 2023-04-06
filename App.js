import React, { useState } from 'react';
import { useColorScheme } from 'react-native';
import { QueryClientProvider, QueryClient } from 'react-query';

import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import Root from '@components/Navigation/Root';

import { darkTheme, lightTheme } from '@styles/theme';
import { ThemeProvider } from 'styled-components/native';

const queryClient = new QueryClient();

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    // preloading APIs, assets or database..
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // await Font.loadAsync(Ionicons.load);
  };

  const isDark = useColorScheme() === 'dark';

  if (!ready) {
    return <AppLoading onFinish={onFinish} onError={console.error} startAsync={startLoading} />;
  }

  // loading done
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
