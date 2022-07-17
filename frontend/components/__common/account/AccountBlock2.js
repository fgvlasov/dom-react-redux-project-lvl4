import React, { useState, useEffect } from "react";

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

import FieldHeading from "../FieldHeading";

export default function AccountBlock2({ ...props }) {
  const [isShow, setIsShow] = useState(false);
  //console.log(props);
  const handleClick = () => setIsShow((prev) => !prev);

  const [inputEmail, setInputEmail] = useState("");
  const [inputEmailConf, setInputEmailConf] = useState("");
  const [isTyped, setIsTyped] = useState(true);

  useEffect(() => {
    inputEmailConf == inputEmail ? setIsTyped(false) : setIsTyped(true);
  }, [inputEmailConf, inputEmail]);

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
          </Box>
          <Box alignItems="end">
            <Button my={2} onClick={handleClick}>
              {isShow ? "Close" : "Edit"}
            </Button>
          </Box>
        </HStack>
      </Stack>
      {isShow && props.children}
    </Box>
  );
}
