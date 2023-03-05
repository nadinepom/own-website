import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box, ScrollView,
} from "native-base";
import NativeBaseIcon from "./src/components/NativeBaseIcon";
import {Floaters} from "./src/components/Floaters";
import {Root} from "./src/components/Root";

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