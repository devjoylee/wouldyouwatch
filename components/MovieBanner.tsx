import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { getUpcomingMovies } from '@/app/_api/endpoint';
import { responsiveHeight } from 'react-native-responsive-dimensions';

import { MovieBannerItem } from './MovieBannerItem';
import { Movie } from '@/types';

export function MovieBanner() {
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const handleUpcomingMovies = async () => {
      const { data, status } = await getUpcomingMovies();
      if (status === 200) setUpcomingMovies(data.results);
    };
    handleUpcomingMovies();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={upcomingMovies}
        renderItem={MovieBannerItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(70),
    width: '100%',
  },
});
