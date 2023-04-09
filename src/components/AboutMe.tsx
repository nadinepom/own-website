import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  Flex,
  Icon,
  Link,
} from "native-base";
import { useMediaQuery } from "native-base";
import { useTranslation } from "react-i18next";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Linking } from "react-native";
import { GlobalStylesheet } from "../utils";

let profileImage = require("../../assets/DSC_1035.jpg");
let dekoImage = require("../../assets/00129.png");

export const AboutMe = () => {
  const { t } = useTranslation();

  const [isMax1024] = useMediaQuery({
    maxWidth: 1024,
  });
  return (
    <Flex
      direction={isMax1024 ? "column" : "row"}
      mb="2.5"
      mt="1.5"
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Box
        style={GlobalStylesheet.shadow}
        flexDirection={isMax1024 ? "column" : "row"}
        flex={1}
        rounded="lg"
        overflow="hidden"
        shadow={2}
        backgroundColor="#C4A484"
        p={4}
        mr={isMax1024 ? 0 : 200}
      >
        <Box>
          <Image
            style={GlobalStylesheet.shadow}
            marginTop={50}
            justifyContent={"center"}
            source={profileImage}
            mr={4}
            width={250}
            height={250}
            rounded={"full"}
            alt="profile_nadine_pom"
          />
        </Box>
        <Stack p={4} space={3} flex={1} justifyContent={"center"}>
          <Stack space={2}>
            <Heading size="md" _dark={{ color: "black" }}>
              {t("aboutMe.header")}
            </Heading>
            <Text bold color={"white"} fontWeight="500" mb={-2}>
              {t("aboutMe.profession")}
            </Text>
            <Text fontSize="xs" color={"white"} fontWeight="500">
              {t("aboutMe.graduation")}
            </Text>
          </Stack>
          <Text fontWeight="400" _dark={{ color: "black" }}>
            {t("aboutMe.description")}
          </Text>
          <Heading size="md" mt={4} _dark={{ color: "black" }}>
            {t("aboutMe.contact.header")}
          </Heading>
          <Box flexDirection={"row"}>
            <Icon as={AntDesign} name="mobile1" size={"md"} color="white" />
            <Text ml={2} bold>
              {t("aboutMe.contact.mobile")}
            </Text>
          </Box>
          <Box flexDirection={"row"}>
            <Icon as={Entypo} name="email" size={"md"} color="white" />
            <Link
              ml={2}
              onPress={() => Linking.openURL("mailto:n.pommerening@dmsp.de")}
            >
              <Text bold underline>
                {t("aboutMe.contact.email")}
              </Text>
            </Link>
          </Box>
        </Stack>
      </Box>

      <Box
        style={GlobalStylesheet.shadow}
        width={isMax1024 ? "100%" : "30%"}
        rounded="lg"
        overflow="hidden"
        shadow={2}
        bg="#F5DEB3"
        px={4}
        marginTop={isMax1024 ? 12 : -12}
      >
        <Stack p={4} space={3} flex={1} height={"100%"}>
          <Image
            source={dekoImage}
            width={"100%"}
            height={300}
            resizeMode={"cover"}
            alt="plants_against_white_background"
          />
          <Heading size="md" mt={4} _dark={{ color: "black" }}>
            {t("aboutMe.lang.header")}
          </Heading>
          <Text fontWeight="400" _dark={{ color: "black" }}>
            {t("aboutMe.lang.body")}
          </Text>
          <Heading size="md" mt={4} _dark={{ color: "black" }}>
            {t("aboutMe.skills.header")}
          </Heading>
          <Text fontWeight="400" _dark={{ color: "black" }}>
            {t("aboutMe.skills.body")}
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};
