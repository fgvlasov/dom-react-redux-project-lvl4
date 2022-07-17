import { useRouter } from "next/router";
import {
  IconButton,
  HStack,
  Box,
  Button,
  Image,
  Link,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import NavMenu from "./NavMenu";
import { useMatchContext } from "../../context/match";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showMenu] = useMatchContext();

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
          {router.pathname}
          {router.pathname === "/auth/login" ? (
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"blue.400"}
              _hover={{
                bg: "grey.300",
              }}
              onClick={() => router.push("/auth/logout")}
            >
              Log Out
            </Button>
          ) : (
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"blue.400"}
              _hover={{
                bg: "grey.300",
              }}
              onClick={() => router.push("/auth/login")}
            >
              Login
            </Button>
          )}
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
