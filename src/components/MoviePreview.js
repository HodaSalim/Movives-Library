import { MovieRating } from "./MovieRating";
import { useParams } from "react-router-dom";
import movies from "../data/data.json";

export function MoviePreview() {
  const { id } = useParams();
  const movie = movies.filter((movie) => Number(id) === movie.id);
  console.log(movie[0].id);

  return (
    <div className="movie-card">
      <h2 className="movie-title">{movie[0].title}</h2>
      <p>{movie[0].description}</p>

      <MovieRating movie={movie[0]} />
      <iframe
        width="560"
        height="315"
        src={movie[0].trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <img src={movie[0].posterURL} alt="poster" className="movie-poster" />
    </div>
  );
}
