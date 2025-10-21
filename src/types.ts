export type Movie = {
    id: number;
    name: string;
    poster_path: string;
    vote_count: number;
    popularity: number;
};

export type MovieListProps = {
    movies?: Movie[];
};