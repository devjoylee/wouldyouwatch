import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Poster from '@components/Poster';
import * as S from './styles';

interface Props {
  movie: MovieType;
}

const MediaItemVertical: React.FC<Props> = ({ movie }) => {
  const { poster_path, original_title, release_date, overview } = movie;
  const navigation = useNavigation();
  const openDetail = () => {
    //@ts-ignore
    navigation.navigate('Stack', { screen: 'Detail', params: { title: original_title } });
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
