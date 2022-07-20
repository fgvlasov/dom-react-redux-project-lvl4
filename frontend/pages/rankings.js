import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import MemberTable from "../components/__common/Tables/MemberTable";

export default function Rankings() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });
  return (
    <Box variant="roundedWhite">
      <Box
        bg="bg-surface"
        boxShadow={{
          base: "none",
          md: useColorModeValue("sm", "sm-dark"),
        }}
        borderRadius={useBreakpointValue({
          base: "none",
          md: "lg",
        })}
      >
        <Stack spacing="5">
          <Box
            px={{
              base: "4",
              md: "6",
            }}
            pt="5"
          >
            <Stack
              direction={{
                base: "column",
                md: "row",
              }}
              justify="space-between"
            >
              <Text fontSize="lg" fontWeight="medium">
                Members
              </Text>
              <InputGroup maxW="xs">
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="muted" boxSize="5" />
                </InputLeftElement>
                <Input placeholder="Search" />
              </InputGroup>
            </Stack>
          </Box>
          <Box overflowX="auto">
            <MemberTable />
          </Box>
          <Box
            px={{
              base: "4",
              md: "6",
            }}
            pb="5"
          >
            <HStack spacing="3" justify="space-between">
              {!isMobile && (
                <Text color="muted" fontSize="sm">
                  Showing 1 to 5 of 42 results
                </Text>
              )}
              <ButtonGroup
                spacing="3"
                justifyContent="space-between"
                width={{
                  base: "full",
                  md: "auto",
                }}
                variant="secondary"
              >
                <Button variant="outline">Previous</Button>
                <Button variant="outline">Next</Button>
              </ButtonGroup>
            </HStack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
