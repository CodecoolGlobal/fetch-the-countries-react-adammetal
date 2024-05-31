import { useState } from "react";
import { Country } from "../types";
import CounrtyDetails from "./CountryDetails";

export default function CountryItem({ country }: { country: Country }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl border-b-2" key={country.cca3}>
        {country.name.common}
      </h2>
      {open ? (
        <CounrtyDetails cca3={country.cca3} onClose={() => setOpen(false)} />
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="btn-primary"
        >
          Learn more
        </button>
      )}
    </div>
  );
}
