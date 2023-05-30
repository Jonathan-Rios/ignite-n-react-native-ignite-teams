import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButtonView = styled.View`
  flex: 1;
`;

export const BackButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
