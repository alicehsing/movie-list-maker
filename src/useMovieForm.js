import { useState } from 'react';

export function useMovieForm() {
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('1986');
  const [movieFormDirector, setMovieFormDirector] = useState('Steven Spielberg');
  const [movieFormTitle, setMovieFormTitle] = useState('Jurassic Park');
  const [movieFormColor, setMovieFormColor] = useState('#b9fbc0');

  return {
    movieFormYearReleased, setMovieFormYearReleased,
    movieFormDirector, setMovieFormDirector,
    movieFormTitle, setMovieFormTitle,
    movieFormColor, setMovieFormColor,
  }; 
}