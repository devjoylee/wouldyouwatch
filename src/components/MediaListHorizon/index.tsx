import React from 'react';
import { FlatList } from 'react-native';
import MediaItemHorizon from '@components/MediaItemHorizon';
import * as S from './styles';

interface Props {
  title: string;
  data: MovieType[];
  marginBottom?: number;
}

const MediaListHorizon: React.FC<Props> = ({ title, data, marginBottom }) => {
  const keyExtractor = (item: MovieType) => item.id + '';

  return (
    <S.ListContainer style={{ marginBottom: marginBottom }}>
      <S.Title>{title}</S.Title>
      <FlatList
        horizontal
        data={data}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ paddingHorizontal: 25 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <MediaItemHorizon movie={item} />}
        ItemSeparatorComponent={S.HSeparator}
      />
    </S.ListContainer>
  );
};

export default MediaListHorizon;
