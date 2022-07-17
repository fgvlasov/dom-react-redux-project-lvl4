import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FetcherFields() {
  const { data, error } = useSWR("/default_account_fields.json", fetcher);
  if (error) return <div>Error loading</div>;
  if (!data) return <div>loading...</div>;
  return { data };
}
