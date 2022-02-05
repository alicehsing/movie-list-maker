import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useMovieForm } from './useMovieForm';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';

function App() {
  //tracks states
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentQuery, setCurrentQuery] = useState('');
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

  //deletes a movie from the state array using index
  function handleDeleteMovie(title) {
    const index = allMovies.findIndex(movie => movie.title === title);
    //use this index to splice out that movie in state
    //the '1' after id means delete one item at that index
    allMovies.splice(index, 1);

    //update state with this updated array (use spread for immutability)
    setAllMovies([...allMovies]);
    setCurrentQuery('');
  }

  //put handleFilterMovies() inside the Effect hook to perform side effects in function components
  //useEffect() hook takes in 2 arguments: useEffect(callback, [dependencies]); callback is the function containing the side-effect logic. callback is executed right after changes were being pushed to DOM.; dependencies is an optional array of dependencies. 
  //Put the side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. 
  useEffect(() => {
    const tempFilter = allMovies.filter(movie => movie.title.includes(currentQuery));

    setFilteredMovies(tempFilter);
  }, [currentQuery, allMovies]);

  // function handleFilterMovies(filter) {
  //   //use the filter method to get an array of movies that title includes this filter argument
  //   const currentFilteredMovies = allMovies.filter(movie => movie.title.includes(filter));
  //   //if there is a filter argument, set the filtered movies to the filtered movies
  //   setFilteredMovies
  //     ? setFilteredMovies(currentFilteredMovies)
  //   // if filter argument is undefined, set the filtered movies in state to just be the array of all movies
  //     : setFilteredMovies(allMovies);
  // }

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

        { movieFormTitle && <Movie 
          title={movieFormTitle}
          director={movieFormDirector}
          year={movieFormYearReleased}
          color={movieFormColor}/>
        }
        
        <p>Filter movies</p>
        <input value={currentQuery} onChange={(e) => setCurrentQuery(e.target.value)}/>

        <MovieList allMovies={
          //this takes in an array of movies. 
          //if the filteredMovies has a length, use that array. Otherwise, use the allMovies array
          filteredMovies.length
            ? filteredMovies
            : allMovies
        }
        handleDeleteMovie={handleDeleteMovie}/>
      </div>
    </div>
  );
}

export default App;
