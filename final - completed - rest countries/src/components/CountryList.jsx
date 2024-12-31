import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/context";
import CountryCard from "./singlecard";


const NoCountriesMessage = () => {
  return <p className="text-center">No countries match the filters.</p>;
};



const CountryGrid = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4  border-solid border-black">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

const CountryList = ({ countries }) => {
  const { isDarkMode } = useDarkMode();
  if (!countries.length) {
    return <NoCountriesMessage />;
  }

  return <CountryGrid countries={countries} isDarkMode={isDarkMode} />;
};

export default CountryList;
