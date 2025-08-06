import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <>
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} style={{ width: '200px' }} />
      <p>{movie.description}</p>
      <strong>Sessions:</strong>
      <ul>
        {movie.sessions.map((time, i) => (
          <li key={i}>{time}</li>
        ))}
      </ul>
      <hr />
    </>
  );
};

const MovieSchedule = ({ movies }) => {
  return (
    <div>
      <h1>🎬 Кіноафіша</h1>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieSchedule;