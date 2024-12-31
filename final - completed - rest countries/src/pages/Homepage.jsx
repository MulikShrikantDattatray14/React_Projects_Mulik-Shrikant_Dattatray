
import Header from "../components/header";

import CountryList from "../components/CountryList";


import FilterComponent from "../components/filter";
import Result from "../components/result";
import { useDarkMode } from "../context/context";



const FilterSection = ({ countries, setFilteredCountries }) => {
    return (
      <FilterComponent
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />
    );
  };
  
  const ResultSection = ({ filteredCountries }) => {
    return <Result filteredCountries={filteredCountries} />;
  };
  
  const LoadingState = () => {
    return <p className="text-center">Loading...</p>;
  };
  
  const CountryListSection = ({ filteredCountries, loading }) => {
    return loading ? (
      <LoadingState />
    ) : (
      <CountryList countries={filteredCountries} />
    );
  };

const HomePage = ({ countries, filteredCountries, setFilteredCountries,loading }) => {
    const { isDarkMode } = useDarkMode();
    return (
      <div
        className={
          isDarkMode ? "bg-gray-800 text-white " : "bg-white text-black "
        }
      >
        <Header />
  
        <FilterSection
          countries={countries}
          setFilteredCountries={setFilteredCountries}
        />
  
        <ResultSection filteredCountries={filteredCountries} />
  
        <CountryListSection
          filteredCountries={filteredCountries}
          loading={loading}
        />
      </div>
    );
  };

  export default HomePage;