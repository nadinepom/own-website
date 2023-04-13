import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import "./src/translations/i18n-translations";
import { NavigationContainer } from "@react-navigation/native";
// import { Navigation } from "./src/navigation/Navigation";
import { HomeScreen } from "./src/screens";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <HomeScreen />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
