import MovieCard from "../components/MovieCard";

import {useState} from "react"

function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const movies = [
    { id: 1, title: "A", release_date: "2020" },
    { id: 2, title: "B", release_date: "2021" },
    { id: 3, title: "C", release_date: "2022" },
  ];

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    alert(searchQuery)
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
