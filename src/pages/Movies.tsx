import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, RefreshControl } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import Slide from '@components/Slide';
import MediaItemHorizon from '@components/MediaItemHorizon';
import MediaItemVertical from '@components/MediaItemVertical';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const API_KEY = '10923b261ba94d897ac6b81148314a3f';

const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<MediaType[]>([]);
  const [trending, setTrending] = useState<MediaType[]>([]);
  const [upcoming, setUpcoming] = useState<MediaType[]>([]);

  const getNowPlaying = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=ca`
      )
    ).json();
    setNowPlaying(results);
  };

  const getTrending = async () => {
    const { results } = await (
      await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
    ).json();
    setTrending(results);
  };

  const getUpcoming = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      )
    ).json();
    setUpcoming(results);
  };

  const getMovieData = async () => {
    await Promise.all([getNowPlaying(), getTrending(), getUpcoming()]);
    setLoading(false);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getMovieData();
    setRefreshing(false);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return loading ? (
    <Loader>
      <ActivityIndicator size='large' />
    </Loader>
  ) : (
    <Container refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <Swiper
        loop
        horizontal
        autoplay
        showsButtons={false}
        showsPagination={false}
        containerStyle={{ width: '100%', height: SCREEN_HEIGHT / 4 }}
      >
        {nowPlaying.map((movie) => (
          <Slide key={movie.id} movie={movie} />
        ))}
      </Swiper>
      <Section>
        <SectionTitle>Trending Movies</SectionTitle>
        <ScrollView
          contentContainerStyle={{ paddingLeft: 25 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {trending?.map((movie) => (
            <MediaItemHorizon key={movie.id} movie={movie} />
          ))}
        </ScrollView>
      </Section>
      <Section>
        <SectionTitle>Coming Soon</SectionTitle>
        {upcoming?.map((movie) => (
          <MediaItemVertical key={movie.id} movie={movie} />
        ))}
      </Section>
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

const Section = styled.View``;

const SectionTitle = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: 600;
  margin: 25px;
`;

export default Movies;
