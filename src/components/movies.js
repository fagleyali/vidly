import React from "react";

const Movies = props => {
  const { totalMovies, onDelete, movies } = props;

  return (
    <div className="container">
      <h1>Movies</h1>

      <table className="table table-resposive">
        <caption
          style={{ captionSide: "top" }}
        >{`Showing ${totalMovies} movies in the database`}</caption>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => onDelete(movie._id)}
                  className="btn btn-danger m-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
