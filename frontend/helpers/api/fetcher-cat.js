import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export { useCat };

function useCat() {
  const { data, error } = useSWR(`https://catfact.ninja/fact`, fetcher);

  return {
    cat: data,
    isLoading: !error && !data,
    isError: error,
  };
}
