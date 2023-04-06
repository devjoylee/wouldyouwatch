import React from 'react';
import Poster from '@components/Poster';
import * as S from './styles';

const Preview: React.FC = ({ movie }) => {
  return (
    <S.HMovie>
      <Poster path={movie.poster_path} />
      <S.HColumn>
        <S.Title>{movie.original_title}</S.Title>
        <S.Release>
          {new Date(movie.release_date).toLocaleDateString('ko', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </S.Release>
        <S.Overview>
          {movie.overview !== '' && movie.overview.length > 80
            ? `${movie.overview.slice(0, 120)}...`
            : movie.overview}
        </S.Overview>
      </S.HColumn>
    </S.HMovie>
  );
};

export default Preview;
