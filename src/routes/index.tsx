import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

import { AppRoutes } from "./app.routes";

export function Routes() {
  const { COLORS } = useTheme();

  return (
    // ? Quando troca de tela, ele pisca em branco, para evitar isso, colocamos o backgroundColor
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
