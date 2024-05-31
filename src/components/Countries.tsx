import { useMemo, useState } from "react";
import { Country } from "../types";
import CountryItem from "./CountryItem";

type Props = {
  countries: Country[];
};

export default function Countries({ countries }: Props) {
  const [value, setValue] = useState("");
  //const [filtered, setFiltered] = useState(countries);

  /*useEffect(() => {
    if (!value) {
      setFiltered(countries);
      return;
    }

    setFiltered(
      countries.filter((c) =>
        c.name.common.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value, countries]);*/

  const filtered = useMemo(() => {
    if (!value) {
      return countries;
    }

    return countries.filter((c) =>
      c.name.common.toLowerCase().includes(value.toLowerCase())
    );
  }, [countries, value]);

  return (
    <div className="flex flex-col gap-4 p-2">
      <input
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        className="w-full shadow-lg p-2 text-2xl"
        placeholder="Search..."
      />
      {filtered.map((country) => (
        <CountryItem key={country.cca3} country={country} />
      ))}
    </div>
  );
}
