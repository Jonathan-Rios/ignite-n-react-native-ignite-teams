import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Logo,
  BackButtonView,
  BackButton,
  BackIcon,
} from "./styles";

import logoImg from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButtonView>
          <BackButton onPress={handleGoBack}>
            <BackIcon />
          </BackButton>
        </BackButtonView>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
