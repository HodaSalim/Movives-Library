import { useState, useEffect } from "react";
const MAX_STARS = 5;
export function Filters({ onFilter }) {
  const [query, setQuery] = useState("");
  const [stars, setStars] = useState("");
  useEffect(() => {
    onFilter(query, stars);
  }, [query, stars, onFilter]);

  return (
    <div>
      <div className="rating-filter">
        <label>By Rating</label>

        <select onChange={(e) => setStars(e.target.value)}>
          <option value=""></option>
          {Array.from({ length: MAX_STARS }).map((_, i) => (
            <option key={i} value={MAX_STARS - i}>
              {"⭐️".repeat(MAX_STARS - i)}
            </option>
          ))}
        </select>
      </div>

      <div className="search">
        <label htmlFor="search">By Title</label>
        <input
          id="search"
          placeholder="Search by title"
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
    </div>
  );
}
