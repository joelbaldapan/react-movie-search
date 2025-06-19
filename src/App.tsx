import './App.css'
import MovieCard from "./components/MovieCard"

function App() {
  return (
    <>
      <MovieCard movie={{title: "A", release_date: "2024"}}/>
      <MovieCard movie={{title: "B", release_date: "2023"}}/>
    </>
  )
}

export default App
