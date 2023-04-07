import { Box, ScrollView } from "native-base";
import { Floaters } from "./Floaters";
import { Timeline } from "./Timeline";
import { AboutMe } from "./AboutMe";
import { AppBar } from "./AppBar";
import { ScrollButton } from "./ScrollButton";
import { useRef } from "react";

export const Root = ({
  children,
  navigation,
  title,
  doclink,
  navigateTo,
  _status,
  _hStack,
  ...props
}: any) => {
  const scrollRef = useRef();

  return (
    <Box
      _dark={{ bg: "blueGray.900" }}
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
        ref={scrollRef}
      >
        <Box
          {...props}
          flex={1}
          px={24}
          py={20}
          w={"100%"}
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <AboutMe />
          <Timeline />
          {/*<Box*/}
          {/*    _web={{*/}
          {/*      _text: {*/}
          {/*        fontFamily: "monospace",*/}
          {/*        fontSize: "sm",*/}
          {/*      },*/}
          {/*    }}*/}
          {/*    px={2}*/}
          {/*    py={1}*/}
          {/*    _dark={{bg: "blueGray.800"}}*/}
          {/*    _light={{bg: "blueGray.200"}}*/}
          {/*>*/}
          {/*  App.js*/}
          {/*</Box>*/}
          <ScrollButton scrollRef={scrollRef} />
        </Box>
      </ScrollView>
      {/*<Floaters />*/}
    </Box>
  );
};
