import type { NextPage } from "next";
import Head from "next/head";
import { AllCountries } from "../screens";

const Home: NextPage = () => {
  return (
    <div>
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
