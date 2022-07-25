import Head from "next/head";
import Navbar from "./Navbar.js";
import NavMenu from "./NavMenu";
import Footer from "./Footer.js";
import { useState, useEffect } from "react";
import { userService } from "services";
import { useRouter } from "next/router";
import { Stack, Box, HStack, Select } from "@chakra-ui/react";
import { useMatchContext } from "../../context/match";

export default function Layout({ children }) {
  const [match, setMatch] = useMatchContext();
  const [showMenu, setShowMenu] = useMatchContext();

  function handleChange(event) {
    //console.log(event.target.value);
    setMatch(event.target.value);
  }

  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // run auth check on initial load
    authCheck(router.asPath);

    // set authorized to false to hide page content while changing routes
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // run auth check on route change
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ["/auth/login"];
    const publicPathsSignup = ["/auth/signup"];
    const path = url.split("?")[0];
    if (
      !userService.userValue &&
      (!publicPaths.includes(path) || !publicPathsSignup.includes(path))
    ) {
      //console.log(path);
      setAuthorized(false);
      if (
        path != "/auth/login" &&
        path != "/auth/signup" &&
        path != "/auth/forgot"
      )
        router.push({
          pathname: "/auth/login",
          query: { returnUrl: router.asPath },
        });
    } else {
      setAuthorized(true);
    }
  }

  return (
    <Box
      display="flex"
      justifyContent={"center"}
      flexDirection="column"
      alignContent="center"
      bg="bgCanvas"
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
          {authorized && (
            <Box className="leftMenuNav" display={{ base: "none", md: "flex" }}>
              <NavMenu w={["100%", "25%"]} />
            </Box>
          )}
          <Stack
            justifyContent="flex-start"
            p={{ base: "5", md: "10" }}
            w={{ base: "100%", md: "75%" }}
          >
            {authorized && (
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
