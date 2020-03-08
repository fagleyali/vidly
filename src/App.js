import React, { useState } from "react";
import { getMovies } from "./services/fakeMovieService";
import Movies from "./components/movies";
import Pagination from "./components/pagination";
import Genre from "./components/genres";
import Paginate from "./utils/paginate";
import _ from 'lodash';
import "./App.css";

function App() {
  const initialState = {
    movies: getMovies(),
    pages: 4,
    currentPage: 1,
    currentGenre: "1",
    sortColumn: {col:'title', order:'asc'}
  };

  const [state, setState] = useState(initialState);

  const handleDelete = id => {
    let updatedMovies = state.movies.filter(movie => movie._id !== id);
    setState({ ...state, movies: updatedMovies });
  };

  const handleSelect = e => {
    let pages = Math.floor(state.movies.length / parseInt(e) + 1);
    setState({ pages });
  };

  const handlePagination = e => {
    setState({ ...state, currentPage: e });
  };

  const handleSort = (sortColumn) => {
    setState({...state, sortColumn})
    console.log(state.sortColumn)
  }

  const filtered =
    state.currentGenre === "1"
      ? state.movies
      : state.movies.filter(m => m.genre._id === state.currentGenre);
  
  const sorted = _.orderBy(filtered, [state.sortColumn.col], [state.sortColumn.order])
      
  const movies = Paginate(sorted, state.currentPage, state.pages);

  const handleGenre = selection => {
    setState({ ...state, currentGenre: selection, currentPage: 1 });
  };

  return (
    <main role="main" className="container row">
      <div className="col-3">
        <Genre onSelectGenre={handleGenre} currentGenre={state.currentGenre} />
      </div>
      <div className="col">
        <Movies
          totalMovies={filtered.length}
          onDelete={handleDelete}
          movies={movies}
          onSort={handleSort}
          sortColumn={state.sortColumn}
        />
        <Pagination
          onSelect={handleSelect}
          pages={state.pages}
          totalMovies={filtered.length}
          currentPage={state.currentPage}
          onPageChange={handlePagination}
        />
      </div>
    </main>
  );
}

export default App;
