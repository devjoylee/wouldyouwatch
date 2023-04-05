import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import Slide from '@components/Slide';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const API_KEY = '10923b261ba94d897ac6b81148314a3f';

const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = () => {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState([]);

  const getNowPlaying = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=ca`
      )
    ).json();
    setNowPlaying(results);
    setLoading(false);
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  return loading ? (
    <Loader>
      <ActivityIndicator size='large' />
    </Loader>
  ) : (
    <Container>
      <Swiper
        loop
        horizontal
        autoplay
        showsButtons={false}
        showsPagination={false}
        containerStyle={{ width: '100%', height: SCREEN_HEIGHT / 4 }}
      >
        {nowPlaying.map((movie) => (
          <Slide
            key={movie.id}
            backdropPath={movie.backdrop_path}
            posterPath={movie.poster_path}
            originalTitle={movie.original_title}
            voteAverage={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </Swiper>
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.bg};
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Movies;
