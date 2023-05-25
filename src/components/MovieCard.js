import { MovieRating } from "./MovieRating";

export function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2 className="movie-title">{movie.title}</h2>
      <p>{movie.description}</p>

      <MovieRating movie={movie} />

      <img src={movie.posterURL} alt="poster" className="movie-poster" />
    </div>
  );
}
