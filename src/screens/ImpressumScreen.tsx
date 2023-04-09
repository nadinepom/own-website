import React from "react";
import { Box, Heading, Text } from "native-base";
import { Trans, useTranslation } from "react-i18next";

export const ImpressumScreen = () => {
  const { t } = useTranslation();
  const counter: string[] = ["1", "2", "3", "4"];

  return (
    <Box px={16} py={10}>
      {counter.map((number) => {
        return (
          <Box mr={50}>
            <Heading size="xl" color={"gray.500"} mb={5} mt={10}>
              {t(`impressum.section${number}.header`)}
            </Heading>
            <Text ml={6} fontWeight="500">
              <Trans i18nKey={`impressum.section${number}.body`}>
                This should be
                <a href="https://www.e-recht24.de" target="_blank">
                  some link
                </a>
              </Trans>
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};
