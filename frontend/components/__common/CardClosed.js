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
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => setIsShow((prev) => !prev);
  return (
    <Box
      as="form"
      bg="gray.100"
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
          <Button
            my={2}
            onClick={handleClick}
            variant="outline"
            colorScheme="blue"
          >
            {isShow ? "Hide" : "Show"}
          </Button>
        </Box>
      </HStack>
      {isShow && props.children}
    </Box>
  );
}
