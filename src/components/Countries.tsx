import { useState } from "react";
import { Country } from "../types";
import CounrtyDetails from "./CountryDetails";

type Props = {
  countries: Country[];
};

export default function Countries({ countries }: Props) {
  const [open, setOpen] = useState('');

  return (
    <div className="flex flex-col gap-4 p-2">
      {countries.map((country) => (
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl border-b-2" key={country.cca3}>
            {country.name.common}
          </h2>
          {open === country.cca3 ? (
            <CounrtyDetails />
          ) : (
            <button
              onClick={() => setOpen(country.cca3)}
              className="p-2 bg-blue-500 text-white self-start rounded-md shadow-md"
            >
              Learn more
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
