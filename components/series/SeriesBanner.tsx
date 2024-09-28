import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { getPopularSeries } from '@/app/_api/endpoint';
import { responsiveHeight } from 'react-native-responsive-dimensions';

import { Series } from '@/types';
import { SeriesBannerItem } from './SeriesBannerItem';

export function SeriesBanner() {
  const [popularSeries, setPopularSeries] = useState<Series[]>([]);

  useEffect(() => {
    const handlepopularSeries = async () => {
      const { data, status } = await getPopularSeries();
      if (status === 200) setPopularSeries(data.results.filter((x: any) => x.overview));
    };
    handlepopularSeries();
  }, []);

  console.log(popularSeries);
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={popularSeries}
        renderItem={SeriesBannerItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(40),
    width: '100%',
  },
});
