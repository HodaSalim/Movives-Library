import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { MoviePreview } from "./components/MoviePreview";
import movies from "./data/data.json";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/movies/:id"
        element={<MoviePreview movie={movies} />}
      ></Route>
    </Routes>
  );
}

export default App;
