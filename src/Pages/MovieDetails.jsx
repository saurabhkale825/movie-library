import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieDetail } from '../Redux/MovieReducer/action'; // Update action if needed

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movieDetail); // Assuming movieDetail is where movie detail is stored
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchMovieDetail(id));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>No movie details found.</div>;

  return (
    <div>
      <h3 className="movie-id">{movie.id}</h3>
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <div className="movie-name">{movie.title}</div>
      <div className="movie-year">{movie.year}</div>
      <div className="movie-type">{movie.type}</div>
      <div className="movie-rating">{movie.rating}</div>
    </div>
  );
};

export default MovieDetail;
