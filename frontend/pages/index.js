import styles from "../styles/Home.module.css";
import { useCat } from "../helpers/api/fetcher-cat";
import { Spinner, Error } from "@chakra-ui/react";

export default function Home() {
  const { cat, isLoading, isError } = useCat();

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <>
      {cat.fact}
      {process.env.match}
    </>
  );
}
