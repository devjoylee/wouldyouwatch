import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';

import Poster from '@components/Poster';
import Votes from '@components/Votes';
import { makeImagePath } from '@utils/makeImagePath';
import { BlurView } from 'expo-blur';
import * as S from './styles';

interface Props {
  movie: MovieType;
}

const Slide: React.FC<Props> = ({ movie }) => {
  const { backdrop_path, poster_path, original_title, vote_average, overview } = movie;
  const isDark = useColorScheme() === 'dark';

  return (
    <View style={{ flex: 1 }}>
      <S.Background
        style={StyleSheet.absoluteFill}
        source={{ uri: makeImagePath(backdrop_path || '') }}
      />
      <BlurView tint={isDark ? 'dark' : 'light'} intensity={85}>
        <S.MovieItem>
          <Poster path={poster_path || ''} />
          <S.TextWrap>
            <S.Title isDark={isDark} numberOfLines={2}>
              {original_title}
            </S.Title>
            <Votes votes={vote_average} />
            <S.Description isDark={isDark} numberOfLines={4}>
              {overview}...
            </S.Description>
          </S.TextWrap>
        </S.MovieItem>
      </BlurView>
    </View>
  );
};

export default Slide;
