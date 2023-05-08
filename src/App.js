import React from "react";
import { Header } from "./components/Header";
import { useState } from "react";
import movies from "./data/data.json";
import { NewMovie } from "./components/NewMovie";

function App() {
  //   const [movies, setMovies] = useState(movies);
  return (
    <>
      <Header />
      <NewMovie />
    </>
  );
}
{
  /* <main>
        <Filters />
        <MoviesList />
      </main> */
}
export default App;
