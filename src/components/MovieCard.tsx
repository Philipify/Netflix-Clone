import type { Movie } from '../types'
import { Card } from '../components/ui/card';
const TMDB_IMAGES_ASSET_URL = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie, index }: { movie: Movie; index: number }) => {
    return (
        <Card key={movie.id} className="relative p-4 rounded-md overflow-hidden cursor-pointer border-0 transition-all duration-500 hover:scale-110 hover:shadow-xl outline-blue-200 w-[15rem] h-[20rem] text-shadow-md">
            <span className="absolute bottom-10 left-0 text-black z-10 drop-shadow-xl text-8xl font-extrabold text-outline">{index + 1}</span>
            <img
                className="rounded-md w-full h-full  object-cover"
                src={`${TMDB_IMAGES_ASSET_URL}${movie.poster_path}`}
                alt={movie.name} />
        </Card>
    )
}

export default MovieCard;