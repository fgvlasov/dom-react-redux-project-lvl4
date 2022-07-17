import React, { useState } from "react";

import {
  Heading,
  Stack,
  HStack,
  VStack,
  Icon,
  Flex,
  Text,
  Box,
  Button,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";

import AccountEmail from "./AccountEmail";
import AccountPassword from "./AccountPassword";
import AccountQuestions from "./AccountQuestions";
import AccountInput from "./AccountInput";
import AccountPhones from "./AccountPhones";
import FieldHeading from "../FieldHeading";

export default function AccountBlock({ ...props }) {
  const [isShow, setIsShow] = useState(false);
  //console.log(props);
  const handleClick = () => setIsShow((prev) => !prev);

  const inputSwitch = (parameter) => {
    switch (parameter) {
      case "email":
        return (
          <AccountEmail
            title={props.title}
            label_email_new={props.label_email_new}
            label_email_confirm={props.label_email_confirm}
            type={props.type}
            placeholder_email_new={props.placeholder_email_new}
            placeholder_email_confirm={props.placeholder_email_confirm}
          />
        );
      case "text":
        return (
          <AccountInput
            attr_label={props.attr_label}
            attr_type={props.attr_type}
            attr_placeholder={props.attr_placeholder}
          />
        );
      case "password":
        return (
          <AccountPassword
            title="New Password"
            title_re="Confirm New Password"
            type="password"
            placeholder="Enter your new password"
            placeholder_re="Re-Enter your new password"
          />
        );
      case "questions":
        return (
          <AccountQuestions
            sequrity_question_1={props.sequrity_question_1}
            sequrity_answer_1={props.sequrity_answer_1}
            sequrity_question_2={props.sequrity_question_2}
            sequrity_answer_2={props.sequrity_answer_2}
          />
        );
      case "address":
        return (
          <AccountAddress
            sequrity_question_1={props.sequrity_question_1}
            sequrity_answer_1={props.sequrity_answer_1}
            sequrity_question_2={props.sequrity_question_2}
            sequrity_answer_2={props.sequrity_answer_2}
          />
        );
      case "phones":
        return (
          <AccountPhones
            title={props.title}
            type={props.type}
            primary_phone_id={props.primary_phone_id}
            primary_phone_title={props.primary_phone_title}
            primary_phone_placeholder={props.primary_phone}
            alt_phone_id={props.alt_phone_id}
            alt_phone_title={props.alt_phone_title}
            alt_phone_placeholder={props.alt_phone}
          />
        );
      default:
        return <AccountInput title="Text" type="text" placeholder="" />;
    }
  };
  return (
    <Box borderBottom="1px solid grey" py={1} maxW="600px">
      <Stack
        alignItems={"flex-start"}
        //minW={{ base: "100%", md: "50%" }}
        justify={"space-between"}
        direction={{ base: "column", md: "row" }}
      >
        <FieldHeading title={props.title} text={props.helpText} />
        <HStack w="100%" justify={"space-between"}>
          <Box align={"flex-start"} minW={{ md: "50%" }} p={2}>
            {props.type == "questions" && !isShow && (
              <Box>
                {props.sequrity_question_1}
                <br />
                {props.sequrity_answer_1}
                <br />
                <br />
                {props.sequrity_question_2}
                <br />
                {props.sequrity_answer_2}
              </Box>
            )}
            {props.parameter && !isShow && <Box py={2}>{props.parameter}</Box>}
            {isShow && props.type == "text" && <>{inputSwitch(props.type)} </>}
          </Box>
          <Box alignItems="end">
            <Button my={2} onClick={handleClick}>
              {isShow ? "Close" : "Edit"}
            </Button>
          </Box>
        </HStack>
      </Stack>
      {isShow && props.type != "text" && <Box>{inputSwitch(props.type)} </Box>}
    </Box>
  );
}
