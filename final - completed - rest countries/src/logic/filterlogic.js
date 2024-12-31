function applyFilters(countries,searchQuery,selectedRegion,selectedSubregion,selectedLanguage,sortBy,setFilteredCountries){
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
      filtered = filtered.filter((country) => country.subregion === selectedSubregion);
    }

    if (selectedLanguage) {
      filtered = filtered.filter((country) => Object.values(country.languages || {}).includes(selectedLanguage));
    }

    if (sortBy) {
      const [key, order] = sortBy.split("-");
      console.log(key,order)
      filtered = [...filtered].sort((a, b) => (order === "Asc" ? a[key] - b[key] : b[key] - a[key]));
    }

    setFilteredCountries(filtered);
  };

  export default applyFilters;