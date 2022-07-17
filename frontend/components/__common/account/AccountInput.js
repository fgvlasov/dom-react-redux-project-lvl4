import {
  InputGroup,
  Stack,
  Button,
  HStack,
  Input,
  FormControl,
} from "@chakra-ui/react";

export default function AccountInput({ ...props }) {
  return (
    <Stack w="100%">
      <FormControl>
        <HStack>
          <Input type={props.attr_type} placeholder={props.attr_placeholder} />
          <Button type="submit">Save</Button>
        </HStack>
      </FormControl>
    </Stack>
  );
}
