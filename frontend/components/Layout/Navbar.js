import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { userService } from "services";
import {
  IconButton,
  HStack,
  Box,
  Button,
  Image,
  Link,
  Text,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import NavMenu from "./NavMenu";
import { useMatchContext } from "/context/match";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showMenu] = useMatchContext();
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    userService.getAll().then((x) => setUsers(x));

    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  const router = useRouter();
  return (
    <>
      <HStack
        bg={useColorModeValue("#225270", "blue.600")}
        p={2}
        spacing={8}
        justifyContent={"center"}
      >
        <HStack
          align={"center"}
          w={"100%"}
          maxW={"1200"}
          justifyContent={"space-between"}
        >
          {showMenu && (
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          )}
          <Link href="/" fontSize={"24"}>
            <Image src="/logo.png" h={50} alt="NatMatch Version2" />
          </Link>
          {users && (
            <Box>
              {users.map((user) => (
                <Text key={user.id} color="white">
                  {user.firstName} {user.lastName}
                </Text>
              ))}
            </Box>
          )}
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"blue.400"}
            _hover={{
              bg: "grey.300",
            }}
            onClick={user ? logout : () => router.push("/auth/login")}
          >
            {user ? "Log Out" : "Login"}
          </Button>
        </HStack>
      </HStack>
      {isOpen ? (
        <Box className="leftMenuNav">
          <NavMenu />
        </Box>
      ) : null}
    </>
  );
}
