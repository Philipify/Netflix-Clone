import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {

  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="flex items-center gap-2">
      {
        showSearch &&
        <input 
        type="text" 
        placeholder="Search..." 
        className="px-4 py-2 rounded-md border border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600" />
      }
        <button onClick={() => setShowSearch(!showSearch)} className="cursor-pointer">
          <Search />
        </button>
    </div>
  )
}