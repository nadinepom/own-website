import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Heading, Text, useColorMode } from "native-base";
import { useTranslation } from "react-i18next";
import { GlobalStylesheet } from "../utils";

export const Timeline = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  const counter: string[] = ["1", "2", "3", "4", "5"];

  return (
    <Box mt={24}>
      <VerticalTimeline lineColor={colorMode == "dark" ? "white" : "#80461B"}>
        {counter.map((number) => {
          return (
            <VerticalTimelineElement
              contentStyle={{
                boxShadow: "8px 3px 10px rgb(0 0 0 / 0.2)",
                background: colorMode == "dark" ? "#F5DEB3" : "#483C32",
              }}
              contentArrowStyle={{
                color: colorMode == "dark" ? "#F5DEB3" : "#483C32",
                borderRight: "10px solid",
              }}
              iconStyle={{
                background:
                  number === "2" || number == "4" ? "#E97451" : "#988558",
              }}
            >
              <Box flexDirection={"row"} justifyContent={"space-between"}>
                <Text
                  color={colorMode == "dark" ? "#722F37" : "#F5DEB3"}
                  fontWeight="400"
                  fontSize="xs"
                >
                  {t(`timeline.job${number}.profession`)}
                </Text>
                <Text
                  color={colorMode == "dark" ? "#722F37" : "#F5DEB3"}
                  fontWeight="400"
                  fontSize="xs"
                >
                  {t(`timeline.job${number}.date`)}
                </Text>
              </Box>

              <Heading
                size="md"
                color={colorMode == "dark" ? "#483C32" : "white"}
              >
                {t(`timeline.job${number}.header`)}
              </Heading>
              <Text
                fontSize="xs"
                color={colorMode == "dark" ? "black" : "white"}
                fontWeight="400"
              >
                {t(`timeline.job${number}.body`)}
              </Text>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Box>
  );
};
