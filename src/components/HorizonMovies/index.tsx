import React from 'react';
import Poster from '@components/Poster';
import { ScrollView } from 'react-native';
import * as S from './styles';

const HorizonMovies: React.FC = ({ movies }) => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingLeft: 25 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {movies?.map((movie) => (
        <S.Movie key={movie.id}>
          <Poster path={movie.poster_path} />
          <S.Title>
            {movie.original_title.slice(0, 13)}
            {movie.original_title.length > 13 ? '...' : null}
          </S.Title>
          <S.Votes>⭐️ {movie.vote_average}/10</S.Votes>
        </S.Movie>
      ))}
    </ScrollView>
  );
};

export default HorizonMovies;
