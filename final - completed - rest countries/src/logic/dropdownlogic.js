
function dropdownmenulogic(countries, selectedRegion,useMemo){
    const regions = useMemo(() => [...new Set(countries.map((country) => country.region))].sort(), [countries]);

    const subregions = useMemo(() => {
      if (!selectedRegion) return [];
      return [
        ...new Set(
          countries
            .filter((country) => country.region === selectedRegion)
            .map((country) => country.subregion)
        ),
      ].sort();
    }, [countries, selectedRegion]);
    
    const languages = useMemo(() => {
      const allLanguages = countries.flatMap((country) => Object.values(country.languages || {}));
      return [...new Set(allLanguages)].sort();
    }, [countries]);

    return {regions,subregions,languages}
  }

  export default dropdownmenulogic;
