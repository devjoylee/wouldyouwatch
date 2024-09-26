import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Poster, Loader } from '@components/index';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { linkToYoutube, makeImagePath } from '@utils/index';
import { movieAPI, tvAPI } from '@utils/api';

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
  const isMovie = !!params.original_title;

  const { isLoading, data } = useQuery<any>(
    [isMovie ? 'movie' : 'tv', params.id],
    isMovie ? movieAPI.detail : tvAPI.detail
  );

  useEffect(() => {
    setOptions({ title: isMovie ? 'Movie' : 'TV show' });
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
      <S.DetailBody>
        <S.Overview>{params.overview}</S.Overview>
        {isLoading && <Loader />}
        {data?.videos?.results?.map(
          (video: any) =>
            video.site === 'YouTube' && (
              <S.VideoButton key={video.key} onPress={() => linkToYoutube(video.key)}>
                <Ionicons name='logo-youtube' color='white' size={24} />
                <S.VideoName>{video.name}</S.VideoName>
              </S.VideoButton>
            )
        )}
      </S.DetailBody>
    </S.Container>
  );
};

export default DetailModal;
