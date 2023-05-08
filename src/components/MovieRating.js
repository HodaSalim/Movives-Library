export function MovieRating({ movie }) {
  const movies = [];
  let i = 1;
  while (i <= movie.rating) {
    movies.push(
      <span className="material-symbols-outlined star" key={i}>
        star
      </span>
    );
    i++;
  }
  return <p>{movies}</p>;
}
