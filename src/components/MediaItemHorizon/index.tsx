import React from 'react';
import Poster from '@components/Poster';
import Votes from '@components/Votes';
import * as S from './styles';

interface Props {
  movie: MediaType;
}

const MediaItemHorizon: React.FC<Props> = ({ movie }) => {
  const { poster_path, original_title, vote_average } = movie;

  return (
    <S.ItemContainer>
      <Poster path={poster_path} />
      <S.Title>
        {original_title.slice(0, 12)}
        {original_title.length > 12 ? '...' : null}
      </S.Title>
      <Votes votes={vote_average} />
    </S.ItemContainer>
  );
};

export default MediaItemHorizon;
