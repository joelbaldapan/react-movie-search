import "../css/Home.css";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";
import type { Movie } from "../services/api";
import { useState, useEffect } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  // Store error and loading
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  // Get movies, only once
  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      try {
        const popularMovies = await getPopularMovies(page);
        setMovies(popularMovies);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    if (!searchQuery) {
      loadPopularMovies();
    }
  }, [page, searchQuery]);

  const handleSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  // Reset to page 1 when searching
  useEffect(() => {
    if (searchQuery) setPage(1);
  }, [searchQuery]);

  return (
    <div className="home">
      {/* Search movies form */}
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

      {/* Loading and Error */}
      {loading && <div className="loading">Loading movies...</div>}
      {error && <div className="error-message">{error}</div>}

      {/* Display Movie Cards */}
      {!loading && !error && (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
      
      {/* Page selector, only show when not searching */}
      {!searchQuery && (
        <div className="page-selector">
          {Array.from({ length: 10 }, (_, i) => (
            <button
              key={i + 1}
              className={`page-btn${page === i + 1 ? " active" : ""}`}
              onClick={() => setPage(i + 1)}
              disabled={loading}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
