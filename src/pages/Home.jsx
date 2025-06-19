import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "A", release_date: "2020" },
    { id: 2, title: "B", release_date: "2021" },
    { id: 3, title: "C", release_date: "2022" },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
