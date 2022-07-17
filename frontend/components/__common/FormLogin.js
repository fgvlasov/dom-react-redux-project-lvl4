import { Formik, Field } from "formik";
import { types } from "mobx-state-tree";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  VStack,
  useColorModeValue,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function Home() {
  function validateBirthYear(value) {
    let error;
    if (value < 1945 || value > 2010) {
      error = "Year must be between 1945 and 2010";
    }
    return error;
  }
  return (
    <Flex justify="center">
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Formik
          initialValues={{
            name: "",
            country: "Canada",
            gender: "",
            birthyear: "",
            email: "",
            password: "",
            rememberMe: false,
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Your Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="country">Country</FormLabel>
                  <Select id="country" placeholder="Select country">
                    <option>Canada</option>
                    <option>USA</option>
                    <option>Mexico</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="gender">Your Gender</FormLabel>
                  <Select id="gender" placeholder="Select your gender">
                    <option>Male</option>
                    <option>Female</option>
                  </Select>
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={!!errors.birthyear && touched.birthyear}
                >
                  <FormLabel htmlFor="birthyear">Year of Birth</FormLabel>
                  <NumberInput
                    max={2010}
                    min={1945}
                    validate={validateBirthYear}
                  >
                    <NumberInputField id="birthyear" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={!!errors.password && touched.password}
                >
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 5) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >
                  Remember me?
                </Field>
                <Button type="submit" colorScheme="purple" isFullWidth>
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
