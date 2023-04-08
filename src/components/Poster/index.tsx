import React from 'react';
import { makeImagePath } from '@utils/makeImagePath';
import styled from 'styled-components/native';

interface PosterProps {
  path: string;
}

const Poster: React.FC<PosterProps> = ({ path }) => {
  return <PosterContainer source={{ uri: makeImagePath(path) }} />;
};

export const PosterContainer = styled.Image`
  width: 100px;
  height: 140px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export default Poster;
