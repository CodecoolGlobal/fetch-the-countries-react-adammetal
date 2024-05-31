export type Country = {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  capitals: string[];
};

export type CountryDetails = {
  name: {
    common: string;
    official: string;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
};
