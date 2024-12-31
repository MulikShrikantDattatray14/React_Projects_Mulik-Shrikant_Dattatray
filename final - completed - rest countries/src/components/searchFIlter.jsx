import { useDarkMode } from "../context/context";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
    const { isDarkMode } = useDarkMode();
    return (
      <div
        className={
          isDarkMode
            ? "flex items-center bg-gray-400 p-2 rounded-lg w-full sm:w-1/4 mb-4 sm:mb-0 border-2 border-solid border-white"
            : "flex items-center bg-gray-100 p-2 rounded-lg w-full sm:w-1/4 mb-4 sm:mb-0 border-2 border-solid border-black"
        }
      >
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-black-800 w-full px-2 placeholder-gray-900"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    );
  };

  export default SearchFilter;