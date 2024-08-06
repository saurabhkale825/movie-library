import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { fetchFilteredMovies } from '../Redux/MovieReducer/action'; // Use fetchFilteredMovies
import MovieCard from './MovieCard';
import "./Component.css";

const MovieList = () => {
  const dispatch = useDispatch();
  const location = useLocation(); // Get location to access query parameters
  const { movies, isLoading, isError } = useSelector((state) => state.movies);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ratings = params.getAll('rating');
    const order = params.get('order');

    dispatch(fetchFilteredMovies({ ratings, order }));
  }, [dispatch, location.search]); // Add location.search to dependency array

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading movies</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
