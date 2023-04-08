import React from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { QueryClient, useQuery } from 'react-query';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Loader from '@components/Loader';
import MediaListHorizon from '@components/MediaListHorizon';
import { tvAPI } from '@utils/api';

const TV: React.FC<NativeStackScreenProps<any, 'TV'>> = () => {
  const queryClient = new QueryClient();

  const {
    isLoading: trendingLoading,
    isRefetching: trendingRefetching,
    data: trendingData,
  } = useQuery(['tv', 'trending'], tvAPI.trending);

  const {
    isLoading: airingLoading,
    isRefetching: airingRefetching,
    data: airingData,
  } = useQuery(['tv', 'airingToday'], tvAPI.airingToday);

  const {
    isLoading: topRatedLoading,
    isRefetching: topRatedRefetching,
    data: topRatedData,
  } = useQuery(['tv', 'topRated'], tvAPI.topRated);

  const onRefresh = () => queryClient.refetchQueries(['tv']);

  const isLoading = airingLoading || topRatedLoading || trendingLoading;
  const isRefetching = trendingRefetching || airingRefetching || topRatedRefetching;

  if (isLoading) return <Loader />;

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />}
      contentContainerStyle={{ paddingVertical: 0 }}
    >
      <MediaListHorizon title='Trending TV series' data={trendingData?.results} />
      <MediaListHorizon title='Airing Today' data={airingData?.results} />
      <MediaListHorizon
        title='Top Rated TV series'
        data={topRatedData?.results}
        marginBottom={30}
      />
    </ScrollView>
  );
};

export default TV;
