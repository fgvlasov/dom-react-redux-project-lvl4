import { navLinks } from "../../constants/global";
import { Link, Icon, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function NavMenu() {
  const router = useRouter();
  return (
    <VStack as={"nav"} spacing={4} px={5} py={10} alignItems={"flex-start"}>
      {navLinks.map((link) => (
        <Link
          key={link.title}
          rounded={"md"}
          display={"flex"}
          justifyItems={"center"}
          alignItems={"center"}
          _hover={{
            textDecoration: "underline",
            color: "blue.500",
          }}
          color={router.pathname === link.path ? "blue.500" : ""}
          fontWeight={router.pathname === link.path ? "semibold" : ""}
          href={link.path}
        >
          <Icon
            as={link.icon}
            w={5}
            h={5}
            mx={2}
            _hover={{
              color: "blue.500",
            }}
          />

          {link.title}
        </Link>
      ))}
    </VStack>
  );
}
