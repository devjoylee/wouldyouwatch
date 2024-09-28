import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Movie } from '@/types';
import { ThemedText } from './ThemedText';

interface HSliderProps {
  title: string;
  data: Movie[];
}

export function HSlider({ title, data }: HSliderProps) {
  const renderMovieCards = ({ item }: { item: Movie }) => {
    return (
      <TouchableOpacity>
        <Image
          resizeMode='center'
          style={styles.movieImg}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ThemedText type='subtitle'>{title}</ThemedText>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderMovieCards}
        ItemSeparatorComponent={() => <View style={{ width: 15 }}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(40),
    gap: 15,
    marginTop: 10,
    marginBottom: 30,
  },
  movieImg: {
    width: responsiveWidth(50),
    height: '100%',
    borderRadius: 10,
  },
});
