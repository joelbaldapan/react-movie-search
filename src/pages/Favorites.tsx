import "../css/Favorites.css";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

function Favorite() {
  const { favorites } = useMovieContext()!;

  if (favorites && favorites.length > 0) {
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
      <h2>Your Favorites List is Empty!</h2>
      <p>Start favoriting movies in the Home Tab, and they will appear in Your Favorites!</p>
    </div>
  );
}

export default Favorite;
