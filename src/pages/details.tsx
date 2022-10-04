import type { NextPage } from "next";
import { Country } from "../screens";
const CountryDetails: NextPage = () => {
  return (
    <div className="flex flex-1">
      <Country />
    </div>
  );
};

export default CountryDetails;
