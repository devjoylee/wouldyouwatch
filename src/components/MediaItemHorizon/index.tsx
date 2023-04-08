import React from 'react';
import Poster from '@components/Poster';
import Votes from '@components/Votes';
import * as S from './styles';

interface Props {
  movie: MovieType;
}

const MediaItemHorizon: React.FC<Props> = ({ movie }) => {
  const { poster_path, original_title, original_name, vote_average } = movie;

  return (
    <S.ItemContainer>
      <Poster path={poster_path || ''} />
      <S.Title numberOfLines={1}>{original_title ?? original_name}</S.Title>
      <Votes votes={vote_average} />
    </S.ItemContainer>
  );
};

export default MediaItemHorizon;
