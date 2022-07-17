import { omit } from "lodash/fp";
import {
  Button,
  Alert,
  Select,
  Icon,
  Flex,
  Heading,
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import * as yup from "yup";

import { useForm2 } from "../../components/useForm";

const initialValues = {
  title: "mr",
  name: "",
  email: "",
  password: "",
};

const validationSchema = yup.object({
  title: yup.string().label("Title").required().nullable(),
  name: yup.string().label("Name").required(),
  email: yup.string().label("Email").email().required(),
  password: yup.string().label("Password").min(6).required(),
});

export default function Register() {
  const form = useForm2({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(values), 3000);
      });
    },
  });

  const { errors, hasError, getInputProps } = form;

  return (
    <div className="Main">
      <div className="App">
        {form.submitted && (
          <div className="Message">
            <Alert status="success">
              <AlertIcon />
              <AlertTitle>Form submitted succesfully!</AlertTitle>
            </Alert>
          </div>
        )}
        <div className="Form">
          <Heading as="h1">Register</Heading>
          <hr />
          <form onSubmit={form.handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <Select
                  {...getInputProps("title")}
                  placeholder="Your title"
                  onChange={(val) => form.setValue("title", val)}
                >
                  <option value="mr">Mr</option>
                  <option value="mrs">Mrs</option>
                  <option value="ms">Ms</option>
                  <option value="miss">Miss</option>
                  <option value="anyone">Anyone</option>
                </Select>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    {...getInputProps("name")}
                    pointerEvents="none"
                    children={<FaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="Type your name" />{" "}
                  {hasError("name") && (
                    <div className="Error">{errors.name}</div>
                  )}
                </InputGroup>
              </FormControl>
              <FormControl>
                <Input
                  {...getInputProps("email", "email")}
                  className={hasError("email") ? "error" : ""}
                  placeholder="Type your email"
                  prefix={"mail"}
                />
                {hasError("email") && (
                  <div className="Error">{errors.email}</div>
                )}
              </FormControl>
              <FormControl>
                <Input
                  {...getInputProps("password", "password")}
                  className={hasError("password") ? "error" : ""}
                  placeholder="Type your password"
                  prefix={"lock"}
                />
                {hasError("password") && (
                  <div className="Error">{errors.password}</div>
                )}
              </FormControl>
              <FormControl>
                <Button onClick={form.resetForm}>Reset</Button>
                <Button
                  disabled={!form.dirty || !form.valid}
                  loading={form.submitting}
                  htmlType="submit"
                >
                  Submit
                </Button>
              </FormControl>
            </Stack>
          </form>
        </div>
      </div>
      <pre className="Json">
        {JSON.stringify(omit("__state", form), null, 4)}
      </pre>
    </div>
  );
}
