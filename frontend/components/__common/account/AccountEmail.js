import { useState, useEffect } from "react";
import {
  InputGroup,
  Stack,
  Button,
  Box,
  FormControl,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import InputText from "../InputText";

export default function AccountEmail({ ...props }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputEmailConf, setInputEmailConf] = useState("");
  const [isTyped, setIsTyped] = useState(false);

  useEffect(() => {
    inputEmailConf !== "" &&
      (inputEmailConf == inputEmail ? setIsTyped(true) : setIsTyped(false));
  }, [inputEmail, inputEmailConf]);

  return (
    <Stack spacing={4} py={2}>
      <FormControl>
        <InputText
          id={props.email_new_id}
          label={props.label_email_new}
          labelPosition="left"
          placeholder={props.placeholder_email_new}
          leftElement="EmailIcon"
          variant="outline"
          value={inputEmail}
          onChange={(event) => setInputEmail(event.target.value)}
        />
        <InputText
          id={props.email_new_confirm}
          label={props.label_email_confirm}
          labelPosition="left"
          placeholder={props.placeholder_email_confirm}
          helperText=""
          leftElement="EmailIcon"
          isDisabled="false"
          isInvalid="false"
          isReadOnly="false"
          isRequired="false"
          size="md"
          variant="outline"
          value={inputEmailConf}
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
        <Button type="submit" disabled={!isTyped}>
          Save
        </Button>
      </Box>
    </Stack>
  );
}
