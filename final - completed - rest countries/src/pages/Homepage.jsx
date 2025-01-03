
import Header from "../components/header";

import CountryList from "../components/CountryList";

import FilterComponent from "../components/filter";
import Result from "../components/result";
import { useDarkMode } from "../context/context";

const FilterSection = ({ countries,
  setCountries,
  loading,
  searchQuery,
  setSearchQuery,
  selectedRegion,
  setSelectedRegion,
  selectedSubregion,
  setSelectedSubregion,
  selectedLanguage,
  setSelectedLanguage,
  sortBy,
  setSortBy,}) => {
  return <FilterComponent countries={countries}
  setCountries={setCountries}
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
  selectedRegion={selectedRegion}
  setSelectedRegion={setSelectedRegion}
  selectedSubregion={selectedSubregion}
  setSelectedSubregion={setSelectedSubregion}
  selectedLanguage={selectedLanguage}
  setSelectedLanguage={setSelectedLanguage}
  sortBy={sortBy}
  setSortBy={setSortBy} />;
};

const ResultSection = ({ countries }) => {
  return <Result countries={countries} />;
};

const LoadingState = () => {
  return <p className="text-center">Loading...</p>;
};

const CountryListSection = ({ countries, loading }) => {
  return loading ? <LoadingState /> : <CountryList countries={countries} />;
};

const HomePage = ({
  countries,
  setCountries,
  loading,
  searchQuery,
  setSearchQuery,
  selectedRegion,
  setSelectedRegion,
  selectedSubregion,
  setSelectedSubregion,
  selectedLanguage,
  setSelectedLanguage,
  sortBy,
  setSortBy,
}) => {
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
        setCountries={setCountries}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedSubregion={selectedSubregion}
        setSelectedSubregion={setSelectedSubregion}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <ResultSection countries={countries} />

      <CountryListSection countries={countries} loading={loading} />
    </div>
  );
};

export default HomePage;
