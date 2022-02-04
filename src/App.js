import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useMovieForm } from './useMovieForm';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';

function App() {
  //tracks states
  const [allMovies, setAllMovies] = useState([]);
  // const [filteredMovies, setAllFilteredMovies] = useState([]);
  const {
    movieFormYearReleased, setMovieFormYearReleased,
    movieFormDirector, setMovieFormDirector,
    movieFormTitle, setMovieFormTitle,
    movieFormColor, setMovieFormColor,
  } = useMovieForm();

  //adds a new movie to the array using form state
  function submitMovie(newMovie) {
    const newAddedMovie = [...allMovies, newMovie];

    setAllMovies(newAddedMovie);
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <br></br>Welcome to the Movie Poster Maker App! <br></br>Simply type in the title, director and released year of your favorite movie, <br></br>pick a poster color, and click &apos;Make Poster&apos;!
      
      <div className='current-movie-section'>
        <MovieForm 
          movieFormYearReleased={movieFormYearReleased} setMovieFormYearReleased={setMovieFormYearReleased}
          movieFormDirector={movieFormDirector}setMovieFormDirector={setMovieFormDirector}
          movieFormTitle={movieFormTitle}
          setMovieFormTitle={setMovieFormTitle}
          movieFormColor={movieFormColor}
          setMovieFormColor={setMovieFormColor} 
          submitMovie={submitMovie} />

        <Movie 
          title={movieFormTitle}
          director={movieFormDirector}
          year={movieFormYearReleased}
          color={movieFormColor}/>
        <p>Filter movies</p>
        <input/>
        <MovieList allMovies={allMovies}/>
      </div>
    </div>
  );
}

export default App;
