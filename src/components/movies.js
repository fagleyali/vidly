import React from "react";

const Movies = props => {
  const { totalMovies, onDelete, movies, onSort, sortColumn } = props;

  const handleSortColumn = (col) => {
    if(sortColumn.col === col){
      if(sortColumn.order === 'asc') sortColumn.order = 'desc';
      else sortColumn.order = 'asc';
    }else {
      sortColumn.col = col;
      sortColumn.order = 'asc';
    }
    return sortColumn;
  }

  return (
    <div className="container">
      <h1>Movies</h1>

      <table className="table table-resposive">
        <caption
          style={{ captionSide: "top" }}
        >{`Showing ${totalMovies} movies in the database`}</caption>
        <thead>
          <tr>
             <th onClick={() => onSort(handleSortColumn('title'))} scope="col">Title</th>
             <th onClick={() => onSort(handleSortColumn('genre.name'))} scope="col">Genre</th>
             <th onClick={() => onSort(handleSortColumn('numberInStock'))} scope="col">Stock</th>
             <th onClick={() => onSort(handleSortColumn('dailyRentalRate'))} scope="col">Rate</th>
             <th onClick={() => onSort()} scope="col"></th>
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
