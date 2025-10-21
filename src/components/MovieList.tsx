import type { Movie, MovieListProps } from '../types'
import MovieCard from './MovieCard';

const MovieList = ({ movies }: MovieListProps) => {
    return (
        <div className="relative my-6">
            <ul className="relative flex overflow-x-scroll overflow-y-visible space-x-4 px-3 scrollbar-hide">
                {
                    movies?.map((movie: Movie, index: number) => (
                        <li key={movie.id}>
                            <MovieCard movie={movie} index={index} />
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default MovieList;