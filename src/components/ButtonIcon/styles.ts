import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styled from "styled-components/native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;

  margin: 0 12px;

  max-height: 56px;
  min-height: 56px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``;
