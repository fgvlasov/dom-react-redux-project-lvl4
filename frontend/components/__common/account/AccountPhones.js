import { useState } from "react";
import { Formik, Field } from "formik";
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
import { InputText } from "../InputText";

export default function AccountPhones({ ...props }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputEmailConf, setInputEmailConf] = useState("");
  const [isTyped, setIsTyped] = useState(true);
  //console.log(props);
  return (
    <Stack spacing={4} py={2}>
      <FormControl>
        <InputText
          id={props.primary_phone_id}
          label={props.primary_phone_title}
          placeholder={props.primary_phone_placeholder}
          leftElement="PhoneIcon"
          onChange={(event) => setInputEmail(event.target.value)}
        />
        <InputText
          id={props.alt_phone_id}
          label={props.alt_phone_title}
          placeholder={props.alt_phone_placeholder}
          leftElement="PhoneIcon"
          onChange={(event) => setInputEmail(event.target.value)}
        />
        {/*
              <Text my="8px">{props.label_email_new}</Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    props.type == "email" ? <FaUserAlt color="gray.300" /> : ""
                  }
                />
                <Input
                  type={props.type}
                  placeholder={props.placeholder_email_new}
                  onChange={(event) => setInputEmail(event.target.value)}
                />
              </InputGroup>
				
              <Text my="8px">{props.label_email_confirm}</Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    props.type == "email" ? <FaUserAlt color="gray.300" /> : ""
                  }
                />
                <Input
                  type={props.type}
                  placeholder={props.placeholder_email_confirm}
                  value={inputEmailConf}
                  onChange={(event) => {
                    setInputEmailConf(event.target.value);
                    inputEmailConf == inputEmail
                      ? setIsTyped(false)
                      : setIsTyped(true);
                  }}
                />
              </InputGroup>
			  */}
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
