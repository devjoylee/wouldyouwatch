import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <ActivityIndicator size='large' />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Loader;
