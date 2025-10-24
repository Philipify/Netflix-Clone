import { createFileRoute, useParams } from '@tanstack/react-router'
import MovieCard from '@/components/MovieCard'
import useSearchStore from '../store/searchStore'
import type { Movie } from '../types'

export const Route = createFileRoute('/search')({
    component: SearchComponent,
    validateSearch: (search: Record<string, unknown>) => ({
        movie: (search.movie as string) || ''
    })
})

function SearchComponent() {
    const { movie  } = Route.useSearch();
    console.log('Search query param:', movie);

    const results = useSearchStore((state) => state.results);
    console.log('Search results in route:', results);

    return (
        <div>
            {
                results?.length > 0 ?
                    <div className="mt-10 p-8 grid grid-cols-6 gap-6">
                        {results.sort((a, b) => b.popularity - a.popularity).map((movie: Movie, index: number) => (
                            <MovieCard key={movie.id} movie={movie} index={index} />
                        ))}
                    </div> :
                    "No Results Found"
            }
        </div>
    )
}
