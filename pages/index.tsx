import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components";
import { AllCountries } from "../screens";

const Home: NextPage<{ countries: any }> = ({ countries }) => {
  return (
    <>
      <Header />
      <div className="flex flex-1 p-10 bg-white dark:bg-darkerBlue">
        <AllCountries countries={countries} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
}

export default Home;
