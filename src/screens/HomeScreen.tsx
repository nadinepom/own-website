import { Box, ScrollView, useMediaQuery, Text, Link } from "native-base";
import {
  AppBar,
  AboutMe,
  Floaters,
  ScrollButton,
  Timeline,
} from "../components";
import { useTranslation } from "react-i18next";

export const HomeScreen = ({
  children,
  navigation,
  title,
  doclink,
  navigateTo,
  _status,
  _hStack,
  ...props
}: any) => {
  const [isMax900] = useMediaQuery({
    maxWidth: 900,
  });

  const { t } = useTranslation();

  return (
    <Box
      _dark={{ bg: "#483C32" }}
      _light={{ bg: "white" }}
      width={"100%"}
      height={"100%"}
    >
      <AppBar />
      <ScrollView
        contentContainerStyle={{
          width: "100%",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Box
          {...props}
          flex={1}
          px={isMax900 ? 6 : 24}
          py={isMax900 ? 0 : 20}
          w={"100%"}
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <AboutMe />
          <Timeline />
        </Box>
        {/*<ScrollButton navigation={navigation} />*/}
        <Box
          width={"100%"}
          py={30}
          px={24}
          background={"#988558"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Text color={"white"}>{t("footer.text")}</Text>
          <Link
            color={"white"}
            onPress={() =>
              navigation.navigate("Impressum & Datenschutzerklärung")
            }
            textDecoration={"underline"}
          >
            <Text color={"white"}>{t("footer.link")}</Text>
          </Link>
        </Box>
      </ScrollView>
      <Floaters />
    </Box>
  );
};
