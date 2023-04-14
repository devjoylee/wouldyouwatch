import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Poster from '@components/Poster';
import { LinearGradient } from 'expo-linear-gradient';
import { makeImagePath } from '@utils/makeImagePath';

import { COLORS } from '@styles/index';
import * as S from './styles';

type RootStackParamList = {
  Detail: Movie | TV;
};

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailModal: React.FC<DetailScreenProps> = ({
  navigation: { setOptions },
  route: { params },
}) => {
  const title = params.original_title ? 'Movie' : 'TV show';

  useEffect(() => {
    setOptions({ title: title });
  }, []);

  return (
    <S.Container>
      <S.DetailHeader>
        <S.Background
          style={StyleSheet.absoluteFill}
          source={{ uri: makeImagePath(params.backdrop_path || '') }}
        />
        <LinearGradient colors={['transparent', COLORS.BLACK]} style={StyleSheet.absoluteFill} />
        <S.Column>
          <Poster path={params.poster_path || ''} />
          <S.Title>{params.original_title ?? params.original_name}</S.Title>
        </S.Column>
      </S.DetailHeader>
      <S.Overview>{params.overview}</S.Overview>
    </S.Container>
  );
};

export default DetailModal;
