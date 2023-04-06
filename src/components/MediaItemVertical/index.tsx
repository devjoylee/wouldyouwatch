import React from 'react';
import Poster from '@components/Poster';
import * as S from './styles';

interface Props {
  movie: MovieType;
}

const MediaItemVertical: React.FC<Props> = ({ movie }) => {
  const { poster_path, original_title, release_date, overview } = movie;

  return (
    <S.ItemContainer>
      <Poster path={poster_path || ''} />
      <S.Details>
        <S.Title>{original_title}</S.Title>
        <S.Release>
          {new Date(release_date).toLocaleDateString('ko', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </S.Release>
        <S.Overview>
          {overview !== '' && overview.length > 80 ? `${overview.slice(0, 120)}...` : overview}
        </S.Overview>
      </S.Details>
    </S.ItemContainer>
  );
};

export default MediaItemVertical;
