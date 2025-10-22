import { create } from "zustand";
import type { Movie } from "../types";
import MOVIE_DATA from "../data/mockdata.json"

type SearchState = {
    query: string;
    results: Movie[];
    setQuery: (query: string) => void;
    setResults: (results: Movie[]) => void;
    performSearch: (query: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
    query: '',
    results: [] as Movie[],
    setQuery: (q: string) => set({ query: q }),
    setResults: (r: Movie[]) => set({ results: r }),
    performSearch: (q: string) => {
        const results = MOVIE_DATA.results.filter((movie: Movie) =>
            movie.name.toLowerCase().includes(q.toLowerCase())
        );
        set({ query: q, results });
    }   
}))