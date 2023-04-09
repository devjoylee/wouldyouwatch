import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import * as S from './styles';

type RootStackParamList = {
  Detail: { title: string };
};

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailModal: React.FC<DetailScreenProps> = ({
  navigation: { setOptions },
  route: {
    params: { title },
  },
}) => {
  useEffect(() => {
    setOptions({ title: title });
  }, []);

  return (
    <S.Container>
      <Text>{title}</Text>
    </S.Container>
  );
};

export default DetailModal;
