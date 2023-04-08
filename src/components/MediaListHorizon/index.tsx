import React from 'react';
import { FlatList } from 'react-native';
import MediaItemHorizon from '@components/MediaItemHorizon';
import * as S from './styles';

interface Props {
  title: string;
  data: MovieType[];
}

const MediaListHorizon: React.FC<Props> = ({ title, data }) => {
  const keyExtractor = (item: MovieType) => item.id + '';

  return (
    <S.ListContainer>
      <S.Title>{title}</S.Title>
      <FlatList
        horizontal
        data={data}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ paddingLeft: 25 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <MediaItemHorizon movie={item} />}
        ItemSeparatorComponent={S.HSeparator}
      />
    </S.ListContainer>
  );
};

export default MediaListHorizon;
