
import { useDarkMode } from "../context/context";
import { Link } from "react-router-dom";


const CountryCard = ({ country }) => {
    const { isDarkMode } = useDarkMode();
    return (
      <Link to={`/country/${country.name?.common}`} key={country.cca3}>
        <div
          className={`${
            isDarkMode
              ? "bg-gray-700 text-white p-4 rounded-lg shadow-lg flex flex-col items-center cursor-pointer border-2  border-solid border-white"
              : "bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center cursor-pointer border-2  border-solid border-black"
          }`}
        >
         
  
          <img
            src={country.flags?.png}
            alt={`Flag of ${country.name?.common}`}
            className={
              isDarkMode
                ? "w-[300px] h-40 object-cover rounded-lg border-4 border-solid border-white"
                : "w-[300px] h-40 object-cover rounded-lg border-4 border-solid border-black"
            }
          />
  
          <h2
            className={
              isDarkMode
                ? "bg-gray-700 text-white text-2xl font-semibold mt-4 text-center my-5"
                : "bg-white text-black text-2xl font-semibold mt-4 text-center my-5"
            }
          >
            {country.name?.common}
          </h2>
          <p
            className={
              isDarkMode
                ? "bg-gray-750 text-white text-sm "
                : "bg-white text-black text-sm "
            }
          >
            <strong>Capital : </strong>
            {country.capital}
          </p>
          <p
            className={
              isDarkMode
                ? "bg-gray-750 text-white text-sm "
                : "bg-white text-black text-sm "
            }
          >
            <strong>Region : </strong>
            {country.region}
          </p>
          <p
            className={
              isDarkMode
                ? "bg-gray-750 text-white text-sm "
                : "bg-white text-black text-sm "
            }
          >
            <strong>Sub-Region : </strong>{" "}
            {country.subregion ? country.subregion : "No Data"}
          </p>
          <p
            className={
              isDarkMode
                ? "bg-gray-750 text-white text-sm "
                : "bg-white text-black text-sm "
            }
          >
            <strong>Population : </strong> {country.population}
          </p>
          <p
            className={
              isDarkMode
                ? "bg-gray-750 text-white text-sm "
                : "bg-white text-black text-sm "
            }
          >
            <strong>Area : </strong> {country.area}
          </p>
        </div>
      </Link>
    );
  };

  export default CountryCard;