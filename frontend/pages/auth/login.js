import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { userService } from "services";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useMatchContext } from "../../context/match";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function AuthLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [showMenu, setShowMenu] = useMatchContext();

  const handleShowClick = () => setShowPassword(!showPassword);

  const router = useRouter();

  useEffect(() => {
    setShowMenu(() => showMenu === "false");
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push("/account");
    }
  }, []);

  // form validation rules
  const validationSchema = Yup.object().shape({
    useremail: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, setError, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ useremail, password }) {
    return userService
      .login(useremail, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || "/";
        router.push(returnUrl);
      })
      .catch((error) => {
        setError("apiError", { message: error });
      });
  }

  return (
    <Box>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading as="h1">Log In</Heading>
        <div className="alert alert-info">
          Email: test@test.ca
          <br />
          Password: test
        </div>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    name="useremail"
                    type="email"
                    {...register("useremail")}
                    className={`form-control ${
                      errors.useremail ? "is-invalid" : ""
                    }`}
                    placeholder="your email"
                  />
                </InputGroup>
                <div className="invalid-feedback">
                  {errors.useremail?.message}
                </div>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    {...register("password")}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
                <FormHelperText textAlign="right">
                  <Link href="/auth/forgot">forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
                disabled={formState.isSubmitting}
              >
                Login
              </Button>
              {errors.apiError && (
                <div className="alert alert-danger mt-3 mb-0">
                  {errors.apiError?.message}
                </div>
              )}
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="blue.500" href="/auth/signup">
          Sign Up
        </Link>
      </Box>
    </Box>
  );
}
