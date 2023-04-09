import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Poster from '@components/Poster';
import Votes from '@components/Votes';
import * as S from './styles';

interface Props {
  movie: MovieType;
}

const MediaItemHorizon: React.FC<Props> = ({ movie }) => {
  const { poster_path, original_title, original_name, vote_average } = movie;
  const title = original_title ?? original_name;
  const navigation = useNavigation();

  const openDetail = () => {
    //@ts-ignore
    navigation.navigate('Stack', { screen: 'Detail', params: { title } });
  };

  return (
    <S.ItemContainer onPress={openDetail}>
      <Poster path={poster_path || ''} />
      <S.Title numberOfLines={1}>{title}</S.Title>
      <Votes votes={vote_average} />
    </S.ItemContainer>
  );
};

export default MediaItemHorizon;
