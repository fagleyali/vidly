import React from "react";
import { getGenres } from "../services/fakeGenreService";

const Genres = [{ _id: "1", name: "All Genres" }, ...getGenres()];

const Genre = props => {
  const { onSelectGenre, currentGenre } = props;

  return (
    <div>
      <ul className="list-group">
        {Genres.map(g => (
          <li
            key={g._id}
            className={
              currentGenre === g._id
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onSelectGenre(g._id)}
          >
            {g.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;
