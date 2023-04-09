import { StyleSheet } from "react-native";

export const GlobalStylesheet = StyleSheet.create({
  shadow: {
    boxShadow: "8px 3px 10px rgb(0 0 0 / 0.2)",
    shadowColor: "#000000",
    shadowOffset: { width: 3, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});
