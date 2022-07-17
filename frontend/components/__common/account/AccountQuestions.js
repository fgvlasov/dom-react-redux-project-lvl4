import { useState } from "react";
import {
  InputGroup,
  Stack,
  HStack,
  Button,
  Box,
  InputLeftAddon,
  Select,
  FormControl,
  Input,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";

export default function AccountQuestions({ ...props }) {
  return (
    <Stack spacing={4}>
      <FormControl>
        <HStack>
          <Box w={["100%", "50%"]}>
            <Text mb="8px">Sequrity Question 1</Text>
            <InputGroup>
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </InputGroup>
          </Box>
          <Box w={["100%", "50%"]}>
            <Text mb="8px">Sequrity Answer 1</Text>
            <InputGroup>
              <Input type={props.type} placeholder={props.sequrity_answer_1} />
            </InputGroup>
          </Box>
        </HStack>
        <HStack py={3}>
          <Box w={["100%", "50%"]}>
            <Text mb="8px">Sequrity Question 2</Text>
            <InputGroup>
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </InputGroup>
          </Box>
          <Box w={["100%", "50%"]}>
            <Text mb="8px">Sequrity Answer 2</Text>
            <InputGroup>
              <Input type={props.type} placeholder={props.sequrity_answer_2} />
            </InputGroup>
          </Box>
        </HStack>
        <Box alignItems="end" align="flex-start" my={2}>
          <Button type="submit">Save</Button>
        </Box>
      </FormControl>
    </Stack>
  );
}
