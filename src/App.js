import React, { useCallback } from "react";
import { Header } from "./components/Header";
import { useState } from "react";
import movies from "./data/data.json";
import { NewMovie } from "./components/NewMovie";
import { MoviesList } from "./components/MoviesList";
import { onVisibility } from "./components/utils/onVisiblity";
import { Filters } from "./components/Filters";

function App() {
  const [moviesList, setMoviesList] = useState(movies);

  const onFilter = useCallback((query, stars) => {
    console.log(typeof stars);
    const filteredList = movies
      .filter((movie) => movie.title.toLowerCase().includes(query))
      .filter((movie) => (stars ? movie.rating === Number(stars) : movie));

    setMoviesList(filteredList);
  }, []);

  return (
    <>
      <Header />
      <NewMovie setMoviesList={setMoviesList} />
      <Filters onFilter={onFilter} />
      <MoviesList movies={moviesList} />
      <div className="overlay hidden" onClick={onVisibility}></div>
    </>
  );
}

export default App;
