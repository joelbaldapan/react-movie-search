import "../css/MovieCard.css";
import type { Movie } from "../services/api";
import { useMovieContext } from "../contexts/MovieContext";

type MovieCardProps = {
  movie: Movie;
};

function MovieCard({ movie }: MovieCardProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()!;
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        <p className="user-rating">
          {movie.vote_average
            ? <>★ {movie.vote_average.toFixed(2)}</>
            : "Rating unavailable"}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
