import { Search } from "lucide-react";
import { useState } from "react";
import MOVIE_DATA from "../data/mockdata.json"
import type { Movie } from "../types";
import useDebounce from 'react-debounced';

export default function SearchBar() {

  const [showSearch, setShowSearch] = useState(false);

  const searchFor = async (query: string) => {
    // Implement search logic here
    console.log("Searching for:", query);

    const results = MOVIE_DATA.results.filter((movie: Movie) =>
      movie.name.toLowerCase().includes(query.toLowerCase())
    );

    console.log("Search results:", results);
  }

  const debounce = useDebounce(2000);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    console.log("Search query:", e.target.value);

    debounce(() => {
      searchFor(query);
    })
  }

  return (
    <div className="flex items-center gap-2">
      {
        showSearch &&
        <input
          onChange={handleSearch}
          onBlur={() => setShowSearch(false)}
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-md border border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600" />
      }
      <button
        onClick={() => setShowSearch(true)} className="cursor-pointer">
        <Search />
      </button>
    </div>
  )
}