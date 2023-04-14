import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Poster, Votes } from '@components/index';
import { makeImagePath } from '@utils/makeImagePath';
import { BlurView } from 'expo-blur';
import * as S from './styles';

interface Props {
  movie: Movie | TV;
}

export const Slide: React.FC<Props> = ({ movie }) => {
  const { backdrop_path, poster_path, original_title, vote_average, overview } = movie;
  const isDark = useColorScheme() === 'dark';
  const navigation = useNavigation();
  const openDetail = () => {
    //@ts-ignore
    navigation.navigate('Stack', { screen: 'Detail', params: { ...movie } });
  };

  return (
    <TouchableWithoutFeedback onPress={openDetail}>
      <S.SlideContainer style={{ flex: 1 }}>
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
      </S.SlideContainer>
    </TouchableWithoutFeedback>
  );
};
