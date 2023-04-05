import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';

import Poster from '@components/Poster';
import { makeImagePath } from '@utils/makeImagePath';
import { BlurView } from 'expo-blur';
import * as S from './styles';

interface SlideProps {
  backdropPath: string;
  posterPath: string;
  originalTitle: string;
  voteAverage: number;
  overview: string;
}

const Slide: React.FC<SlideProps> = ({
  backdropPath,
  posterPath,
  originalTitle,
  voteAverage,
  overview,
}) => {
  const isDark = useColorScheme() === 'dark';

  return (
    <View style={{ flex: 1 }}>
      <S.Background style={StyleSheet.absoluteFill} source={{ uri: makeImagePath(backdropPath) }} />
      <BlurView tint={isDark ? 'dark' : 'light'} intensity={85}>
        <S.MovieItem>
          <Poster path={posterPath} />
          <S.TextWrap>
            <S.Title isDark={isDark}>{originalTitle}</S.Title>
            <S.Votes isDark={isDark}>⭐️ {voteAverage}/10</S.Votes>
            <S.Description isDark={isDark}>{overview.slice(0, 80)}...</S.Description>
          </S.TextWrap>
        </S.MovieItem>
      </BlurView>
    </View>
  );
};

export default Slide;
