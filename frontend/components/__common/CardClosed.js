import React, { useState } from "react";

import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function CardClosed({ ...props }) {
  const [isShowCard, setIsShowCard] = useState(false);
  const handleClick = () => setIsShowCard((prev) => !prev);
  return (
    <Box
      as="form"
      bg="bgSurface"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      borderRadius="lg"
      px={{
        base: "4",
        md: "6",
      }}
      py="4"
      mb="4"
    >
      <HStack w="100%" justify={"space-between"}>
        <Heading as="h2" fontSize="2xl" noOfLines={1} py={5}>
          {props.title}
        </Heading>
        <Box alignItems="end">
          <Button onClick={handleClick} variant="outline">
            {isShowCard ? "Hide" : "Show"}
          </Button>
        </Box>
      </HStack>
      {isShowCard && props.children}
    </Box>
  );
}
