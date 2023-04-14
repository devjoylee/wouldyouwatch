import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Poster from '@components/Poster';
import * as S from './styles';

interface Props {
  item: Movie;
}

const MediaItemVertical: React.FC<Props> = ({ item }) => {
  const { poster_path, original_title, release_date, overview } = item;
  const navigation = useNavigation();
  const openDetail = () => {
    //@ts-ignore
    navigation.navigate('Stack', { screen: 'Detail', params: { ...item } });
  };

  return (
    <S.ItemContainer onPress={openDetail}>
      <Poster path={poster_path || ''} />
      <S.Details>
        <S.Title numberOfLines={1}>{original_title}</S.Title>
        <S.Release>
          {new Date(release_date).toLocaleDateString('ko', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </S.Release>
        <S.Overview numberOfLines={5}>{overview}</S.Overview>
      </S.Details>
    </S.ItemContainer>
  );
};

export default MediaItemVertical;
