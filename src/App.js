import React from "react";
import { Header } from "./components/Header";
import { useState } from "react";
import movies from "./data/data.json";
import { NewMovie } from "./components/NewMovie";
import { MoviesList } from "./components/MoviesList";
import { onVisibility } from "./components/utils/onVisiblity";

function App() {
  const [moviesList, setMoviesList] = useState(movies);
  return (
    <>
      <Header />
      <NewMovie setMoviesList={setMoviesList} />
      <MoviesList movies={moviesList} />
      <div className="overlay hidden" onClick={onVisibility}></div>
    </>
  );
}

export default App;
