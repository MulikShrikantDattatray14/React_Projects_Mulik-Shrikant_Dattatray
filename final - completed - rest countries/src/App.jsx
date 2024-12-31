import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import CountryList from "./components/CountryList";
import CountryDetail from "./pages/countryDetails";
import HomePage from "./pages/Homepage";
import FilterComponent from "./components/filter";
import Result from "./components/result";
import { useDarkMode } from "./context/context";



const App = () => {
  const { isDarkMode } = useDarkMode();
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              countries={countries}
              filteredCountries={filteredCountries}
              loading={loading}
              setFilteredCountries={setFilteredCountries}
            />
          }
        />
        <Route
          path="/country/:name"
          element={<CountryDetail countries={countries} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
