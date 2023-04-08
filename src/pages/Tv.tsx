import React, { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { QueryClient, useQuery } from 'react-query';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Loader from '@components/Loader';
import MediaListHorizon from '@components/MediaListHorizon';
import { tvAPI } from '@utils/api';

const TV: React.FC<NativeStackScreenProps<any, 'TV'>> = () => {
  const [refreshing, setRefreshing] = useState(false);
  const queryClient = new QueryClient();

  const { isLoading: trendingLoading, data: trendingData } = useQuery(
    ['tv', 'trending'],
    tvAPI.trending
  );

  const { isLoading: airingLoading, data: airingData } = useQuery(
    ['tv', 'airingToday'],
    tvAPI.airingToday
  );

  const { isLoading: topRatedLoading, data: topRatedData } = useQuery(
    ['tv', 'topRated'],
    tvAPI.topRated
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(['tv']);
    setRefreshing(false);
  };

  const isLoading = airingLoading || topRatedLoading || trendingLoading;

  if (isLoading) return <Loader />;

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
