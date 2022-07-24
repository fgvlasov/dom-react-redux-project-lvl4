import { Heading, Stack } from "@chakra-ui/react";
import TrackInfoBlock from "../components/__common/TrackInfoBlock";
import CardForm from "../components/__common/CardForm";
import CardClosed from "../components/__common/CardClosed";

export default function Privacy() {
  return (
    <>
      <Heading as="h1">Profile</Heading>

      <CardClosed title="Track information">
        <CardForm />
      </CardClosed>
    </>
  );
}
/*
        <TrackInfoBlock title="Match Code Number:" info="3441" button="none" />
        <TrackInfoBlock
          title="Track description:"
          info="PMSR/RRA"
          button="Edit"
        />
		 */
