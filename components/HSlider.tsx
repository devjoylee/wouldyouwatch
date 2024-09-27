import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Movie } from '@/types';

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
      <Text style={styles.title}>{title}</Text>
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
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  movieImg: {
    width: responsiveWidth(50),
    height: '100%',
    borderRadius: 10,
  },
});
