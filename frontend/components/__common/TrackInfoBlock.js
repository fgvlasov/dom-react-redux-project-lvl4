import { Heading, Stack, HStack, Box } from "@chakra-ui/react";

export default function Privacy({ ...props }) {
  return (
    <HStack>
      <Box w={"150px"}>{props.title}</Box>
      <Box>{props.info}</Box>
    </HStack>
  );
}
