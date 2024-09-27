import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { HSlider } from './HSlider';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from '@/app/_api/endpoint';
import { Movie } from '@/types';

export function MovieBody() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const handleApi = async () => {
      const { data, status } = await getNowPlayingMovies();
      if (status === 200) setNowPlayingMovies(data.results);
    };
    handleApi();
  }, []);

  useEffect(() => {
    const handleApi = async () => {
      const { data, status } = await getPopularMovies();
      if (status === 200) setPopularMovies(data.results);
    };
    handleApi();
  }, []);

  useEffect(() => {
    const handleApi = async () => {
      const { data, status } = await getTopRatedMovies();
      if (status === 200) setTopRatedMovies(data.results);
    };
    handleApi();
  }, []);

  return (
    <View style={styles.bodyContainer}>
      <HSlider title='Now Playing' data={nowPlayingMovies} />
      <HSlider title='Popular Movies' data={popularMovies} />
      <HSlider title='Top Rated Movies' data={topRatedMovies} />
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
