import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Root } from "./src/components/Root";
import "./src/providers/LanguageProvider";

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
    <NativeBaseProvider>
      <Root />
    </NativeBaseProvider>
  );
}
