import React, { useState } from "react";
import {
  Heading,
  Stack,
  HStack,
  VStack,
  Icon,
  Flex,
  Text,
  Box,
  Button,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
/* https://pro.chakra-ui.com/components/application/notifications */

export default function FieldHeading({ title, text }) {
  const [helpVisible, setHelpVisible] = useState(false);
  const closeHelp = () => setHelpVisible((help) => !help);
  return (
    <Heading as="h3" fontSize="xl" minW="110px" pt={4} position="relative">
      {title}
      {/*<IconButton
            aria-label="Search database"
            onClick={closeHelp}
            icon={<QuestionIcon color="grey.300" pl={2} />}
          />*/}
      {text && (
        <QuestionIcon color="#aaa" pl={1} w="25px" onClick={closeHelp} />
      )}

      {helpVisible && (
        <Box position="absolute" top="100%" left="100%" zIndex="100">
          <Flex direction="row-reverse">
            <Box boxShadow="md" bg="#333" borderRadius="lg" color="#ffffff">
              <Stack
                direction="row"
                p="4"
                spacing="3"
                w="100%"
                justifyContent="space-between"
              >
                <Stack minW="200px">
                  <Text fontSize="sm" fontWeight="medium">
                    {text}
                  </Text>
                </Stack>
                <CloseButton
                  border="1px"
                  borderColor="#fff"
                  transform="translateY(-6px)"
                  onClick={closeHelp}
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
      )}
    </Heading>
  );
}
