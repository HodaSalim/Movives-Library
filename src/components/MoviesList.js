import { MovieCard } from "./MovieCard";

export function MoviesList({ movies }) {
  return (
    <section className="movies-list">
      {movies.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
    </section>
  );
}
