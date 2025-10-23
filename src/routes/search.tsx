import { createFileRoute } from '@tanstack/react-router'
import MOVIE_DATA from '../data/mockdata.json'
import type { Movie } from '../types'
import MovieCard from '@/components/MovieCard'

export const Route = createFileRoute('/search')({
    component: SearchComponent
})

function SearchComponent() {
    return (
        <div>
            {
                MOVIE_DATA?.results?.length > 0 ?
                    <div className="mt-10 p-8 grid grid-cols-6 gap-6">
                        {MOVIE_DATA.results.sort((a, b) => b.popularity - a.popularity).map((movie: Movie, index: number) => (
                            <MovieCard key={movie.id} movie={movie} index={index} />
                        ))}
                    </div> :
                    "No Results Found"
            }
        </div>
    )
}
