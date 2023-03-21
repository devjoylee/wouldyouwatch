import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Movies = ({ navigation: { navigate } }) => (
  <Button onPress={() => navigate('Stack', { screen: 'Three' })}>
    <Title>Movies</Title>
  </Button>
);

const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bg};
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.text};
`;

export default Movies;
