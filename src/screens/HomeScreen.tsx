import { Box, ScrollView, useMediaQuery, Text, Link } from "native-base";
import { AppBar, AboutMe, Floaters, Timeline } from "../components";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "@react-navigation/native";

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
  // const ref = React.useRef(null);
  // useScrollToTop(ref);

  return (
    <Box
      _dark={{ bg: "black" }}
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
        >
          <AboutMe />
          <Timeline />
        </Box>
        <Box
          width={"100%"}
          py={30}
          px={10}
          background={"#5E5E5E"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Text flex={1} color={"white"}>
            {t("footer.text")}
          </Text>
          <Link
            color={"white"}
            onPress={() =>
              navigation.navigate("Impressum & Datenschutzerklärung")
            }
            textDecoration={"underline"}
          >
            <Text lineBreakMode={"middle"} color={"white"}>
              {t("footer.link")}
            </Text>
          </Link>
        </Box>
      </ScrollView>
      <Floaters />
    </Box>
  );
};
