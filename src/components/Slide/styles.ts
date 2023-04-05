import styled from 'styled-components/native';

export const Background = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Title = styled.Text<{ isDark: boolean }>`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.isDark ? 'white' : props.theme.text)};
`;

export const MovieItem = styled.View`
  flex-direction: row;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
`;

export const TextWrap = styled.View`
  width: 60%;
`;

export const Description = styled.Text<{ isDark: boolean }>`
  margin-top: 10px;
  color: ${(props) => (props.isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)')};
`;

export const Votes = styled(Description)<{ isDark: boolean }>`
  margin-top: 5px;
  font-size: 12px;
`;
