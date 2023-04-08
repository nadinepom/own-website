import React from "react";
import { Box, Button, Icon, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

export const ScrollButton = () => {
  const { t } = useTranslation();
  const onPressTouch = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Button onPress={onPressTouch} bg="#C2B280" _hover={{ bg: "#988558" }}>
      <Box flexDirection={"row"}>
        <Text bold color={"white"}>
          {t("scroll.text")}
        </Text>
        <Icon as={AntDesign} name="arrowup" size={"md"} color="white" ml={1} />
      </Box>
    </Button>
  );
};
