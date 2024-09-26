import React from 'react';
import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailModal from '@pages/DetailModal';
import { COLORS } from '@styles/index';

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: isDark ? COLORS.BLACK : 'white',
        },
        headerTitleStyle: {
          color: isDark ? 'white' : COLORS.BLACK,
        },
      }}
    >
      <NativeStack.Screen name='Detail' component={DetailModal} />
    </NativeStack.Navigator>
  );
};

export default Stack;
