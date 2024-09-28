import styled from 'styled-components/native';

export const ItemContainer = styled.TouchableOpacity`
  padding: 0px 25px 20px;
  flex-direction: row;
`;

export const Details = styled.View`
  margin-left: 15px;
  width: 80%;
`;

export const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 7px;
  width: 83%;
`;

export const Overview = styled.Text`
  color: white;
  opacity: 0.8;
  width: 83%;
`;

export const Release = styled.Text`
  color: white;
  font-size: 12px;
  margin: 5px 0 10px;
`;
