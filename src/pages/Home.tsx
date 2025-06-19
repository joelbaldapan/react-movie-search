import "../css/Home.css";
import MovieCard from "../components/MovieCard";

import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const movies = [
    { id: 1, title: "AAA", release_date: "2020" },
    { id: 2, title: "BBB", release_date: "2021" },
    { id: 3, title: "CCC", release_date: "2022" },
  ];

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
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
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
