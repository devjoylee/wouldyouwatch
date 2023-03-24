import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, useColorScheme } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import { makeImagePath } from '@utils/makeImagePath';
import { BlurView } from 'expo-blur';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const API_KEY = '10923b261ba94d897ac6b81148314a3f';

const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = () => {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState([]);
  const isDark = useColorScheme() === 'dark';

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
          <View key={movie.id}>
            <Background
              style={StyleSheet.absoluteFill}
              source={{ uri: makeImagePath(movie.backdrop_path) }}
            />
            <BlurView tint={isDark ? 'dark' : 'light'} intensity={85}>
              <MovieItem>
                <Poster source={{ uri: makeImagePath(movie.poster_path) }} />
                <TextWrap>
                  <Title isDark={isDark}>{movie.original_title}</Title>
                  <Votes isDark={isDark}>⭐️ {movie.vote_average}/10</Votes>
                  <Description isDark={isDark}>{movie.overview.slice(0, 80)}...</Description>
                </TextWrap>
              </MovieItem>
            </BlurView>
          </View>
        ))}
      </Swiper>
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.bg};
`;

const View = styled.View`
  flex: 1;
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Background = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text<{ isDark: boolean }>`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.isDark ? 'white' : props.theme.text)};
`;

const Poster = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 5px;
`;

const MovieItem = styled.View`
  flex-direction: row;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
`;

const TextWrap = styled.View`
  width: 60%;
`;

const Description = styled.Text<{ isDark: boolean }>`
  margin-top: 10px;
  color: ${(props) => (props.isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)')};
`;

const Votes = styled(Description)<{ isDark: boolean }>`
  margin-top: 5px;
  font-size: 12px;
`;

export default Movies;
