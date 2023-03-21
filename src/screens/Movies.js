import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Movies = ({ navigation: { navigate } }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <TouchableOpacity onPress={() => navigate('Stack', { screen: 'Three' })}>
      <Text>Movies</Text>
    </TouchableOpacity>
  </View>
);

export default Movies;
