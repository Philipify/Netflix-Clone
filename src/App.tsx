import './App.css'
import Hero from './components/Hero'
import TrendingNow from './components/TrendingNow'
import PlanBanner from './components/PlanBanner'

function App() {

  return (
    <main>
      <div className='min-h-screen bg-background text-foreground transition-colors duration-300'>
        <Hero />
        <PlanBanner />
        <TrendingNow />
      </div>
    </main>
  )
}

export default App
