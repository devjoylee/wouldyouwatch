import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { getOnAirSeries, getAiringTodaySeries, getTopRatedSeries } from '@/app/_api/endpoint';
import { HSlider } from '@/components/common';
import { Movie } from '@/types';

export function SeriesBody() {
  const [onAirSeries, setOnAirSeries] = useState<Movie[]>([]);
  const [airingTodaySeries, setAiringTodaySeries] = useState<Movie[]>([]);
  const [topRatedSeries, setTopRatedSeries] = useState<Movie[]>([]);

  useEffect(() => {
    const handleApi = async () => {
      const { data, status } = await getOnAirSeries();
      if (status === 200) setOnAirSeries(data.results);
    };
    handleApi();
  }, []);

  useEffect(() => {
    const handleApi = async () => {
      const { data, status } = await getAiringTodaySeries();
      if (status === 200) setAiringTodaySeries(data.results);
    };
    handleApi();
  }, []);

  useEffect(() => {
    const handleApi = async () => {
      const { data, status } = await getTopRatedSeries();
      if (status === 200) setTopRatedSeries(data.results);
    };
    handleApi();
  }, []);

  return (
    <View style={styles.bodyContainer}>
      <HSlider title='Top Rated Series' data={topRatedSeries} />
      <HSlider title='On Air' data={onAirSeries} />
      <HSlider title='Airing Today' data={airingTodaySeries} />
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    paddingHorizontal: 15,
    gap: 10,
    marginTop: 20,
  },
});
