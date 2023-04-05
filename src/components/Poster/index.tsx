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
  width: 90px;
  height: 125px;
  border-radius: 5px;
`;

export default Poster;
