import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export { useUser };

function useUser() {
  const { data, error } = useSWR(
    `local2.appic.natmatch.org:800/api/user/${id}`,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
