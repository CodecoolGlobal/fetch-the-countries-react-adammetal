// https://jvvkjy8utk.execute-api.eu-central-1.amazonaws.com/tourist/api/countries/by-cca3/FRA

import { useQuery } from "@tanstack/react-query";
import { CountryDetails as CountryDetailsType } from "../types";

const URL =
  "https://jvvkjy8utk.execute-api.eu-central-1.amazonaws.com/tourist/api/countries/by-cca3";

async function getCountryDetailsByCca3(
  cca3: string
): Promise<CountryDetailsType> {
  const response = await fetch(`${URL}/${cca3}`);
  const data = await response.json();
  return data;
}

export default function CounrtyDetails({
  onClose,
  cca3,
}: {
  onClose: () => void;
  cca3: string;
}) {
  const query = useQuery({
    queryKey: ["country-details", cca3],
    queryFn: () => getCountryDetailsByCca3(cca3),
  });

  return (
    <div>
      {query.isFetching ? (
        <h1 className="text-2xl">Loading....</h1>
      ) : (
        <>
          <h1 className="text-2xl">Details</h1>
          <table className="text-left border-collapse border-2">
            <thead>
              <tr>
                <th className="border-2 p-2">Name</th>
                <th className="border-2 p-2">Independent</th>
                <th className="border-2 p-2">Status</th>
                <th className="border-2 p-2">ENSZ Member</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 p-2">{query.data?.name.common}</td>
                <td className="border-2 p-2">{query.data?.independent ? "Yes" : "No :("}</td>
                <td className="border-2 p-2">{query.data?.status}</td>
                <td className="border-2 p-2">{query.data?.unMember ? "Yes" : "No :("}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn-secondary" onClick={onClose}>
            Back
          </button>
        </>
      )}
    </div>
  );
}
