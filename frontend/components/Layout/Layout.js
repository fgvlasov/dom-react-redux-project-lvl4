import Head from "next/head";
import Navbar from "./Navbar.js";
import NavMenu from "./NavMenu";
import Footer from "./Footer.js";
import { Stack, Box, HStack, Select } from "@chakra-ui/react";
import { useMatchContext } from "../../context/match";

export default function Layout({ children }) {
  const [match, setMatch] = useMatchContext();
  const [showMenu, setShowMenu] = useMatchContext();

  function handleChange(event) {
    //console.log(event.target.value);
    setMatch(event.target.value);
  }
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      flexDirection="column"
      alignContent="center"
    >
      <Head>
        <title>NatMatch Version2</title>
      </Head>
      <Navbar />
      <HStack justifyContent="center">
        <Stack
          className="mainContainer"
          maxW={"1200"}
          w={"100%"}
          direction={["column", "row"]}
          justifyContent={"center"}
        >
          {showMenu && (
            <Box className="leftMenuNav" display={{ base: "none", md: "flex" }}>
              <NavMenu w={["100%", "25%"]} />
            </Box>
          )}
          <Stack
            justifyContent="flex-start"
            p={{ base: "5", md: "10" }}
            w={{ base: "100%", md: "75%" }}
          >
            {showMenu && (
              <Select
                placeholder="Select match"
                variant="filled"
                value={match}
                onChange={handleChange}
              >
                <option value="_01_appic">appic</option>
                <option value="_02_caspr">caspr</option>
              </Select>
            )}
            {children}
          </Stack>
        </Stack>
      </HStack>
      <Footer />
    </Box>
  );
}
