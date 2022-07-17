import { useState, useEffect } from "react";
import {
  InputGroup,
  Stack,
  Button,
  Box,
  InputLeftAddon,
  FormControl,
  InputLeftElement,
  InputRightElement,
  FormHelperText,
  Input,
  InputRightAddon,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { InputText } from "../InputText";

export default function AccountEmail({ ...props }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputEmailConf, setInputEmailConf] = useState("");
  const [isTyped, setIsTyped] = useState(true);

  useEffect(() => {
    inputEmailConf == inputEmail ? setIsTyped(false) : setIsTyped(true);
  }, [inputEmailConf, inputEmail]);

  return (
    <Stack spacing={4} py={2}>
      <FormControl>
        <InputText
          id={props.email_new_id}
          label={props.label_email_new}
          labelPosition="left"
          placeholder={props.placeholder_email_new}
          leftElement="FaUserAlt"
          variant="outline"
          onChange={(event) => setInputEmail(event.target.value)}
        />
        <InputText
          id={props.email_new_confirm}
          label={props.label_email_confirm}
          labelPosition="left"
          placeholder={props.placeholder_email_confirm}
          helperText=""
          leftElement="FaUserAlt"
          isDisabled="false"
          isInvalid="false"
          isReadOnly="false"
          isRequired="false"
          size="md"
          variant="outline"
          onChange={(event) => setInputEmailConf(event.target.value)}
        />
      </FormControl>
      <AlertDialog>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogBody>Changing your email will change</AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Box alignItems="end" align="flex-start" my={2}>
        <Button type="submit" disabled={isTyped}>
          Save
        </Button>
      </Box>
    </Stack>
  );
}
