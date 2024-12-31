import React, { useState, useMemo, useEffect } from "react";
import { useDarkMode } from "../context/context";
import Dropdown from "./Downdown";
import applyFilters from "../logic/filterlogic";
import SearchFilter from "./searchFIlter";
import dropdownmenulogic from "../logic/dropdownlogic";

const FilterComponent = ({ countries, setFilteredCountries }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSubregion, setSelectedSubregion] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [sortBy, setSortBy] = useState("");

  const { isDarkMode } = useDarkMode();


  
  const {regions,subregions,languages}=dropdownmenulogic(countries,selectedRegion ,useMemo)

  useEffect(() => {
    applyFilters(countries,searchQuery,selectedRegion,selectedSubregion,selectedLanguage,sortBy,setFilteredCountries);
  }, [searchQuery, selectedRegion, selectedSubregion, selectedLanguage, sortBy]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 p-6 bg-white-100 text-black">
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} isDarkMode={isDarkMode} />
      
      <Dropdown
        id="region"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        options={regions}
        placeholder="Select Region"
      />
      
      <Dropdown
        id="subregion"
        value={selectedSubregion}
        onChange={(e) => setSelectedSubregion(e.target.value)}
        options={subregions}
        placeholder="Select Subregion"
        disabled={!selectedRegion}
      />
      
      <Dropdown
        id="language"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        options={languages}
        placeholder="Select Language"
      />
      
      <Dropdown
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        options={[
          "population-Asc",
          "population-Desc",
          "area-Asc",
          "area-Desc",
        ]}
        placeholder="Sort By"
      />
    </div>
  );
};

export default FilterComponent;
