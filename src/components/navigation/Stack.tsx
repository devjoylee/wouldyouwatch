import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';

const NativeStack = createNativeStackNavigator();

const ScreenOne: React.FC<NativeStackScreenProps<any, 'One'>> = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate('Two')}>
    <Text>Go to Two</Text>
  </TouchableOpacity>
);

const ScreenTwo: React.FC<NativeStackScreenProps<any, 'Two'>> = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate('Three')}>
    <Text>Go to Three</Text>
  </TouchableOpacity>
);

const ScreenThree: React.FC<NativeStackScreenProps<any, 'Three'>> = ({
  navigation: { goBack },
}) => (
  <TouchableOpacity onPress={() => goBack()}>
    <Text>Go Back</Text>
  </TouchableOpacity>
);

const Stack = () => (
  <NativeStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <NativeStack.Screen name='One' component={ScreenOne} />
    <NativeStack.Screen name='Two' component={ScreenTwo} />
    <NativeStack.Screen name='Three' component={ScreenThree} />
  </NativeStack.Navigator>
);

export default Stack;
