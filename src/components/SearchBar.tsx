import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <>
      <button onClick={() => alert("Search Clicked.")}>
        <Search />
      </button>
      <input className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none" type="text" placeholder="Search..." />
    </>
  );
};

export default SearchBar;
