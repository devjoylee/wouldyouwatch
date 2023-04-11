import React, { useState } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery, useQueryClient } from 'react-query';

import Swiper from 'react-native-swiper';
import Slide from '@components/Slide';
import Loader from '@components/Loader';
import MediaItemVertical from '@components/MediaItemVertical';
import MediaListHorizon from '@components/MediaListHorizon';

import { movieAPI } from '@utils/api';
import styled from 'styled-components/native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = () => {
  const [refreshing, setRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const { isLoading: nowPlayingLoading, data: nowPlayingData } = useQuery<MovieResponse>(
    ['movies', 'nowPlaying'],
    movieAPI.nowPlaying
  );

  const { isLoading: upcomingLoading, data: upcomingData } = useQuery<MovieResponse>(
    ['movies', 'upcoming'],
    movieAPI.upcoming
  );

  const { isLoading: trendingLoading, data: trendingData } = useQuery<MovieResponse>(
    ['movies', 'trending'],
    movieAPI.trending
  );

  const movieKeyExtractor = (item: Movie) => item.id + '';

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(['movies']);
    setRefreshing(false);
  };

  const isLoading = nowPlayingLoading || upcomingLoading || trendingLoading;

  if (isLoading) return <Loader />;

  return (
    <FlatList
      onRefresh={onRefresh}
      refreshing={refreshing}
      data={upcomingData?.results}
      keyExtractor={movieKeyExtractor}
      renderItem={({ item }) => <MediaItemVertical item={item} />}
      ListHeaderComponent={
        <>
          <Swiper
            loop
            horizontal
            autoplay
            showsButtons={false}
            showsPagination={false}
            containerStyle={{ width: '100%', height: SCREEN_HEIGHT / 3.8 }}
          >
            {nowPlayingData?.results.map((movie: Movie) => (
              <Slide key={movie.id} movie={movie} />
            ))}
          </Swiper>
          {trendingData && (
            <MediaListHorizon
              title='Trending Movies'
              data={trendingData.results}
              marginBottom={30}
            />
          )}
          <SectionTitle>Coming Soon</SectionTitle>
        </>
      }
    />
  );
};

const SectionTitle = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 15px;
  margin-left: 25px;
`;

export default Movies;
