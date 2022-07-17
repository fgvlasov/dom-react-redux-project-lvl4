import {
  Heading,
  Stack,
  HStack,
  VStack,
  Icon,
  Box,
  Button,
} from "@chakra-ui/react";

export default function DashbordBlock({ ...props }) {
  return (
    <Stack>
      <HStack alignItems={"flex-start"}>
        <Box>
          <Icon
            as={props.icon}
            color={"green.200"}
            w={5}
            h={5}
            mx={2}
            my={0.5}
          />
        </Box>
        <VStack align={"flex-start"} minW={{ md: "50%" }}>
          <Heading as="h3" fontSize="xl">
            {props.title}
          </Heading>
          {props.address && (
            <Box fontWeight="semibold" className="trackName">
              {props.name}
            </Box>
          )}
          {props.address && (
            <Box fontWeight="semibold" className="trackAddress">
              {props.address}
            </Box>
          )}
          {props.text && <Box className="trackText">{props.text}</Box>}
          {props.director && (
            <Box className="trackDirector">
              Program director: {props.director}
            </Box>
          )}
        </VStack>
        <Box>
          <Button>{props.rightButtonName}</Button>
        </Box>
      </HStack>
    </Stack>
  );
}
