import { Button } from "@components/Button";
import { TouchableOpacityProps } from "react-native";
import { Container, Title, UsersIcon } from "./styles";

type GroupCardProps = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <UsersIcon />
      <Title>{title}</Title>
    </Container>
  );
}
