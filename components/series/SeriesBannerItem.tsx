import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import { Series } from '@/types';
import { ThemedText } from '@/components/common';
import { responsiveWidth } from 'react-native-responsive-dimensions';

export const SeriesBannerItem = ({ item }: { item: Series }) => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        style={StyleSheet.absoluteFill}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path || item.poster_path}`,
        }}
      />
      <BlurView intensity={75}>
        <View style={styles.banner}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
            style={styles.poster}
          />
          <View style={styles.info}>
            <ThemedText style={styles.title}>{item.name}</ThemedText>
            {item.vote_average > 0 && (
              <ThemedText style={styles.votes}>⭐️ {item.vote_average}/10</ThemedText>
            )}
            <ThemedText style={styles.overview} numberOfLines={4}>
              {item.overview}
            </ThemedText>
          </View>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: responsiveWidth(100),
    height: '100%',
    justifyContent: 'flex-end',
  },
  banner: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  info: {
    width: '60%',
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  votes: {
    marginTop: 10,
    fontSize: 12,
  },
  overview: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
    opacity: 0.8,
  },
});
