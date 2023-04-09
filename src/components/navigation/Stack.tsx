import React from 'react';
import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailModal from '@pages/DetailModal';
import { colors } from 'styles/colors';

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: isDark ? colors.black : 'white',
        },
        headerTitleStyle: {
          color: isDark ? 'white' : colors.black,
        },
      }}
    >
      <NativeStack.Screen name='Detail' component={DetailModal} />
    </NativeStack.Navigator>
  );
};

export default Stack;
