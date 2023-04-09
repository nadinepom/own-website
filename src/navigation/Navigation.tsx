import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ImpressumScreen } from "../screens";

export const Navigation: React.FC<{}> = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Impressum & Datenschutzerklärung"
        component={ImpressumScreen}
        options={{
          headerStyle: { backgroundColor: "#C2B280" },
          headerTitleStyle: {
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};
