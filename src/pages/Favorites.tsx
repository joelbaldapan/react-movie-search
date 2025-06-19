import "../css/Favorites.css";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

function Favorite() {
  const { favorites } = useMovieContext()!;

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>Favorite Movies List Empty!</h2>
      <p>Start favoriting movies, and they will appear here!</p>
    </div>
  );
}

export default Favorite;
