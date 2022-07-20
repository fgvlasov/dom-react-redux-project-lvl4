import { extendTheme } from "@chakra-ui/react";

// https://chakra-ui.com/docs/styled-system/customize-theme#customizing-single-components
const theme = extendTheme({
  fonts: {
    heading: `'Source Sans Pro', sans-serif`,
    body: `'Source Sans Pro', sans-serif`,
  },
  colors: {
    bgCanvas: "#F7FAFC",
    bgSurface: "white",
    black: "#000",
    white: "#fff",
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "light",
        color: "#222222",
      },
    },
    Box: {
      variants: {
        roundedWhite: {
          bg: "bgSurface",
          boxShadow: "sm",
          borderRadius: "lg",
          px: {
            base: "4",
            md: "6",
          },
          py: "4",
          mb: "4",
        },
      },
    },
    Button: {
      colorScheme: "blue",
      variants: {
        outline: {
          bg: "tile.100",
          //boxShadow: "0 0 2px 2px #efdfde",
          my: "2",
          boxShadow: "base",
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "blue.300" : "blue.500",
        }),
        // 5. We can add responsive variants
        sm: {
          bg: "teal.500",
          fontSize: "md",
        },
      },
      defaultProps: {
        variant: "outline",
        colorScheme: "blue",
      },
    },
  },
});

export default theme;
