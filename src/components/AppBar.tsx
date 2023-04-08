import { HStack, IconButton, Icon, Text, Image, Box } from "native-base";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Linking } from "react-native";
import { useTranslation } from "react-i18next";

let profileImage = require("../../assets/favicon.png");
export const AppBar = () => {
  const { t } = useTranslation();

  return (
    <Box position={"sticky"} top={0} w="100%" height={100} zIndex={100}>
      <HStack
        bg="#C2B280"
        px={{ base: 4, md: 10, lg: 20, xl: 20 }}
        py="2"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack alignItems="center">
          <Image
            source={profileImage}
            resizeMode={"contain"}
            width={10}
            height={10}
          />
          <Text color="white" fontSize="20" fontWeight="bold" pl={4}>
            {t("appbar.title")}
          </Text>
        </HStack>
        <HStack>
          <IconButton
            _hover={{ bg: "#988558" }}
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/nadine-pommerening-522097b9/"
              )
            }
            icon={
              <Icon as={Entypo} name="linkedin" size={"lg"} color="white" />
            }
          />
          <IconButton
            _hover={{ bg: "#988558" }}
            onPress={() => Linking.openURL("https://github.com/nadinepom")}
            icon={
              <Icon as={AntDesign} name="github" size={"lg"} color="white" />
            }
          />
        </HStack>
      </HStack>
    </Box>
  );
};
