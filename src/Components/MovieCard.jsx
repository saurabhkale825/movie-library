import React from 'react';
import { Link } from 'react-router-dom';
import "./Component.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.Poster} alt={movie.Title} className="movie-image" />
      </Link>
      <h3 className="movie-name">{movie.Title}</h3>
      <p className="movie-year">{movie.Year}</p>
      <p className="movie-type">{movie.Type}</p>
      <p className="movie-rating">{movie.rating}</p>
    </div>
  );
};

export default MovieCard;

