import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components";
import { AllCountries } from "../screens";

const Home: NextPage<{ countries: any }> = ({ countries }) => {
  console.log(countries);
  return (
    <>
      <Header />
      <div className="flex flex-1 h-full">
        <AllCountries />
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
