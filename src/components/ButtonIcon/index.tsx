import { TouchableOpacityProps } from "react-native";
import { Container, ButtonIconTypeStyleProps, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({
  icon,
  type = "PRIMARY",
  ...rest
}: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon type={type} name={icon} />
    </Container>
  );
}
