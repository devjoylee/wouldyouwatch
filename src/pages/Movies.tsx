import React from 'react';
import { ActivityIndicator, Dimensions, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery, useQueryClient } from 'react-query';

import Swiper from 'react-native-swiper';
import Slide from '@components/Slide';
import MediaItemHorizon from '@components/MediaItemHorizon';
import MediaItemVertical from '@components/MediaItemVertical';

import { movieAPI } from '@utils/api';
import styled from 'styled-components/native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = () => {
  const queryClient = useQueryClient();

  const {
    isLoading: nowPlayingLoading,
    data: nowPlayingData,
    isRefetching: isRefetchingNowPlaying,
  } = useQuery<MovieResponse>(['movies', 'nowPlaying'], movieAPI.nowPlaying);

  const {
    isLoading: upcomingLoading,
    data: upcomingData,
    isRefetching: isRefetchingUpcoming,
  } = useQuery<MovieResponse>(['movies', 'upcoming'], movieAPI.nowPlaying);

  const {
    isLoading: trendingLoading,
    data: trendingData,
    isRefetching: isRefetchingTrending,
  } = useQuery<MovieResponse>(['movies', 'trending'], movieAPI.nowPlaying);

  const movieKeyExtractor = (item: MovieType) => item.id + '';

  const onRefresh = () => {
    queryClient.refetchQueries(['movies']);
  };

  const isLoading = nowPlayingLoading || upcomingLoading || trendingLoading;
  const isRefetching = isRefetchingNowPlaying || isRefetchingUpcoming || isRefetchingTrending;

  return isLoading ? (
    <Loader>
      <ActivityIndicator size='large' />
    </Loader>
  ) : (
    <FlatList
      onRefresh={onRefresh}
      refreshing={isRefetching}
      data={upcomingData?.results}
      keyExtractor={movieKeyExtractor}
      renderItem={({ item }) => <MediaItemVertical movie={item} />}
      ItemSeparatorComponent={VSeparator}
      ListHeaderComponent={
        <>
          <Swiper
            loop
            horizontal
            autoplay
            showsButtons={false}
            showsPagination={false}
            containerStyle={{ width: '100%', height: SCREEN_HEIGHT / 4 }}
          >
            {nowPlayingData?.results.map((movie: MovieType) => (
              <Slide key={movie.id} movie={movie} />
            ))}
          </Swiper>
          <Section>
            <SectionTitle>Trending Movies</SectionTitle>
            <FlatList
              horizontal
              data={trendingData?.results}
              keyExtractor={movieKeyExtractor}
              contentContainerStyle={{ paddingLeft: 25 }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <MediaItemHorizon movie={item} />}
              ItemSeparatorComponent={HSeparator}
            />
          </Section>
          <SectionTitle>Coming Soon</SectionTitle>
        </>
      }
    />
  );
};

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

const VSeparator = styled.View`
  height: 20px;
`;

const HSeparator = styled.View`
  width: 10px;
`;

export default Movies;
