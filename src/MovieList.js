import React from 'react';
import Movie from './Movie';

export default function MovieList({ allMovies, handleDeleteMovie }) {
  return <div className='movie-list'>
    {
      allMovies.map((movie, i) => 
        <Movie 
          key={`${movie.title}-${i}`} {...movie}
          handleDeleteMovie={handleDeleteMovie} />)
    }
  </div>;
}
