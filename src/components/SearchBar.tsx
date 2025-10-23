import { Search } from "lucide-react";
import { useState } from "react";
import type { Movie } from "../types";
import MOVIE_DATA from "../data/mockdata.json"
import useSearchStore from "../store/searchStore";
import useDebounce from 'react-debounced';

export default function SearchBar() {

  const [showSearch, setShowSearch] = useState(false);
  const performSearch= useSearchStore((state) => state.performSearch);
  const debounce = useDebounce(500);

  const searchFor = async (query: string) => {
    performSearch(query);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    console.log("Search query:", e.target.value);

    debounce(() => {
      searchFor(query);
    })
  }
  

  const handleBlur = () => {
        setShowSearch(false);
    }

  return (
     <div className="flex items-end">
            {showSearch ? (
                <div className="flex items-center bg-black/80 border border-white/20 rounded-sm px-3 py-2 min-w-[280px] backdrop-blur-sm">
                    <Search
                        size={20}
                        className="text-white/70 mr-3 flex-shrink-0"
                    />
                    <input
                        className="bg-transparent text-white placeholder:text-white/60 text-sm focus:outline-none flex-1 font-normal"
                        type="text"
                        placeholder="Titles, people, genres"
                        aria-label="Search"
                        onChange={handleSearch}
                        onBlur={handleBlur}
                        autoFocus
                    />
                </div>
            ) : (
                <button
                    onClick={() => setShowSearch(true)}
                    className="p-2 hover:bg-white/10 rounded-sm transition-colors duration-200"
                    aria-label="Search"
                >
                    <Search size={24} className="text-white" />
                </button>
            )}
        </div>
  )
}