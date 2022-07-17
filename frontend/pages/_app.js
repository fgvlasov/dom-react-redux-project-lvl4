import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import theme from "../components/theme";
import { useRouter } from "next/router";
import { en } from "../locales/en";
import { fr } from "../locales/fr";
import { MatchProvider } from "../context/match";
// https://blog.logrocket.com/guide-state-management-next-js/

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const t = router.locale === "en" ? en : fr;
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MatchProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </MatchProvider>
  );
}

export default MyApp;
