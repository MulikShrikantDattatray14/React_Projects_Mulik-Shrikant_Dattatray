import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetail from "./pages/countryDetails";
import HomePage from "./pages/Homepage";
import { useDarkMode } from "./context/context";

const ErrorComponent = () => {
  return (
    <div>
      <p style={{ color: "red" }}>Something went wrong!</p>
    </div>
  );
};

const App = () => {
  const { isDarkMode } = useDarkMode();
  const [countries, setCountries] = useState([]);
  //const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSubregion, setSelectedSubregion] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   applyFilters(countries,searchQuery,selectedRegion,selectedSubregion,selectedLanguage,sortBy,setCountries);
  // }, [searchQuery, selectedRegion, selectedSubregion, selectedLanguage, sortBy]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      // setFilteredCountries(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setLoading(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  let filtered = countries;
  if (searchQuery) {
    filtered = filtered.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (selectedRegion) {
    filtered = filtered.filter((country) => country.region === selectedRegion);
  }

  if (selectedSubregion) {
    filtered = filtered.filter(
      (country) => country.subregion === selectedSubregion
    );
  }

  if (selectedLanguage) {
    filtered = filtered.filter((country) =>
      Object.values(country.languages || {}).includes(selectedLanguage)
    );
  }

  if (sortBy) {
    const [key, order] = sortBy.split("-");
    console.log(key, order);
    filtered = [...filtered].sort((a, b) =>
      order === "Asc" ? a[key] - b[key] : b[key] - a[key]
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            error ? (
              <ErrorComponent />
            ) : (
              <HomePage
                countries={filtered}
                loading={loading}
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
            )
          }
        />
        <Route
          path="/country/:name"
          element={
            error ? <ErrorComponent /> : <CountryDetail countries={countries} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
