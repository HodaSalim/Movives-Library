import { onVisibility } from "./utils/onVisiblity";
export function NewMovie({ setMoviesList }) {
  const onMovieAdd = (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const pairs = [];
    for (const pair of formData.entries()) {
      pairs.push(pair);
    }
    const addedMovie = Object.fromEntries(pairs);
    setMoviesList((prevMovies) => [addedMovie, ...prevMovies]);
    onVisibility();
  };
  return (
    <form className="movie-form hidden" onSubmit={onMovieAdd}>
      <h2>Fill out Movie details</h2>
      <label>Movie Name</label>
      <input name="title" />
      <label>Movie description</label>
      <input name="description" />
      <label>Poster URL</label>
      <input name="posterURL" />
      <label>Rating</label>
      <select name="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
      <button onSubmit={onMovieAdd}>button</button>
    </form>
  );
}
