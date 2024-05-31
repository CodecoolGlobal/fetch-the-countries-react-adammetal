import { useQuery } from "@tanstack/react-query";
import { Country } from "../types";
import Countries from "../components/Countries";

const URL = 'https://jvvkjy8utk.execute-api.eu-central-1.amazonaws.com/tourist/api/countries/all';

const fetchAll = async (): Promise<Country[]> => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export default function Home() {
  const query = useQuery({ queryKey: ['countries'], queryFn: fetchAll });

  return (
    <>
      {query.isFetching ? "Loading..." : <Countries countries={query.data!}/>}
    </>
  )
}
