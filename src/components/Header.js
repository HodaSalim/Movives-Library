import { onVisibility } from "./utils/onVisiblity";

export function Header() {
  return (
    <header className="header">
      <div className="title">
        <img src="./logo.png" alt="Movie Library" className="logo" />
        <h1 className="header-title">Movies Library</h1>
      </div>

      <button className="add-movie btn" onClick={onVisibility}>
        Add a new Movie
      </button>
    </header>
  );
}
