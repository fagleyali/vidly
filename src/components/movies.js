import React, {  useState } from 'react';
import { getMovies } from '../services/fakeMovieService';


const Movies = () => {
    const initialState = {
        movies: getMovies()
    }

    const [state, setState] = useState(initialState);
    const getTotalMovies = () => {
        return state.movies.length > 0 ? `Showing ${state.movies.length} in the database` : `No movies in the database`;
    }

    const handleClick = (id) => {
        
        let updatedMovies = state.movies.filter(movie => movie._id !== id)
        setState({movies:updatedMovies})
    }
    return (
        <div className="container">
            <h1>Movies</h1>
            <table className="table table-resposive" >
            <caption style={{captionSide:"top"}}>{getTotalMovies()}</caption>
                <thead>
                    <tr>

                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                    </tr>
                </thead>
                <tbody>

                {state.movies.map(movie => (
                    <tr key={movie._id} >
                            <td >{movie.title}</td>
                            <td >{movie.genre.name}</td>
                            <td >{movie.numberInStock}</td>
                            <td >{movie.dailyRentalRate}</td>
                            <td>
                                <button onClick={()=> handleClick(movie._id)} className="btn btn-danger m-2">Delete</button>
                            </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Movies;