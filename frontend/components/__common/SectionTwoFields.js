import { Stack, FormLabel, Input } from "@chakra-ui/react";

export const SectionTwoFields = (props) => (
  <Stack
    spacing="6"
    direction={{
      base: "column",
      md: "row",
    }}
  >
    {props.children}
  </Stack>
);
