import styled from 'styled-components/native';
import { DIMENSIONS } from '@styles/index';

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.bg};
`;

export const DetailHeader = styled.View`
  height: ${DIMENSIONS.SCREEN_HEIGHT / 4}px;
  justify-content: flex-end;
  padding: 0px 20px;
`;

export const Background = styled.Image``;

export const Column = styled.View`
  flex-direction: row;
  width: 80%;
`;

export const Title = styled.Text`
  color: white;
  font-size: 36px;
  align-self: flex-end;
  margin-left: 15px;
  font-weight: 500;
`;

export const Overview = styled.Text`
  color: ${({ theme }) => theme.text};
  margin-top: 20px;
  padding: 0px 20px;
`;
