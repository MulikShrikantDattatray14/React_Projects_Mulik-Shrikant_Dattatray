import React, { useMemo } from "react";
import { useDarkMode } from "../context/context";
import Dropdown from "./Downdown";
import SearchFilter from "./searchFIlter";
import dropdownmenulogic from "../logic/dropdownlogic";



const FilterComponent = ({
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
  const { regions, subregions, languages } = dropdownmenulogic(
    countries,
    selectedRegion,
    useMemo
  );

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 p-6 bg-white-100 text-black">
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDarkMode={isDarkMode}
      />

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
        options={["population-Asc", "population-Desc", "area-Asc", "area-Desc"]}
        placeholder="Sort By"
      />
    </div>
  );
};

export default FilterComponent;
