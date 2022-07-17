import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Source Sans Pro', sans-serif`,
    body: `'Source Sans Pro', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "light",
        color: "#222222",
      },
    },
  },
});

export default theme;
