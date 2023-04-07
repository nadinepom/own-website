import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  Flex,
  Icon,
  Button,
  Link,
} from "native-base";
import { useMediaQuery } from "native-base";
import { useTranslation } from "react-i18next";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Linking } from "react-native";
let profileImage = require("../../assets/DSC_1035.jpg");
let dekoImage = require("../../assets/new Image.png");

export const AboutMe = () => {
  const { t } = useTranslation();

  const [isMax900] = useMediaQuery({
    maxWidth: 900,
  });
  return (
    <>
      <Flex
        direction={isMax900 ? "column" : "row"}
        mb="2.5"
        mt="1.5"
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Box
          flexDirection={isMax900 ? "column" : "row"}
          width={isMax900 ? "100%" : "60%"}
          height={"70%"}
          rounded="lg"
          overflow="hidden"
          shadow={2}
          backgroundColor="#C4A484"
          p={4}
        >
          <Image
            source={profileImage}
            mr={4}
            shadow={4}
            width={250}
            height={250}
            rounded={"full"}
            alt="profile_nadine_pom"
          />
          <Stack p={4} space={3} flex={1}>
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
          width={isMax900 ? "100%" : "20%"}
          rounded="lg"
          overflow="hidden"
          shadow={2}
          bg="#F5DEB3"
          marginTop={12}
        >
          <Stack p={4} space={3} flex={1}>
            <Image
              source={dekoImage}
              width={null}
              height={200}
              resizeMode={"contain"}
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
    </>
  );
};
