import type { NextPage } from "next";
import Head from "next/head";
import { AllCountries } from "../screens";

const Home: NextPage = () => {
  return (
    <div className="flex flex-1 p-10 bg-white dark:bg-darkerBlue">
      <AllCountries />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  return {
    props: {
      hydrationData: {
        countriesStore: {
          data: countries,
        },
      },
    },
  };
}

export default Home;
