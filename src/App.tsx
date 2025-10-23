import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TrendingNow from './components/TrendingNow'
import PlanBanner from './components/PlanBanner'
import useSearchStore from './store/searchStore'
import MovieCard from './components/MovieCard'
import type { Movie } from './types'

function App() {

  const results = useSearchStore((state) => state.results);

  return (
    <main>
      <div className='min-h-screen bg-background text-foreground transition-colors duration-300'>
        <Header />
        {
          results?.length > 0 ?
            <div className="mt-10 p-8 grid grid-cols-6 gap-6">
              {results.sort((a, b) => b.popularity - a.popularity).map((movie: Movie, index: number) => (
                <MovieCard key={movie.id} movie={movie} index={index} />
              ))}
            </div>
            :
            <>
              <Hero />
              <PlanBanner />
              <TrendingNow />
            </>
        }

      </div>
    </main>
  )
}

export default App
