import MovieList from "./MovieList";
import MOVIE_DATA from "../data/mockdata.json"

const TrendingNow = () => {
    return (
        <div className="px-6 mt-6">
            <h3 className="text-2xl">Trending Now</h3>
            <div>
                {
                    MOVIE_DATA.results?.length > 0 ?
                        <MovieList movies={MOVIE_DATA.results.sort((a, b) => b.popularity - a.popularity)} /> :
                        <div>No movies found.</div>
                }
            </div>
        </div>
    )
}

export default TrendingNow;