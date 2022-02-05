import React from 'react';

export default function MovieForm({
  movieFormYearReleased, 
  setMovieFormYearReleased,
  movieFormDirector, 
  setMovieFormDirector,
  movieFormTitle, 
  setMovieFormTitle,
  movieFormColor, 
  setMovieFormColor,
  submitMovie
}) {

    // make a function that on submit of form,  make a movie object, add it to state 
  function handleSubmit(e) {
    //on submit...
    e.preventDefault();
    //make a movie object
    const movie = {
      title: movieFormTitle,
      director: movieFormDirector,
      year: movieFormYearReleased,
      color: movieFormColor
    };

    //inject new movie object into the allMovies array in App.js
    submitMovie(movie);

    //clear out the form
    setMovieFormTitle('');
    setMovieFormYearReleased('');
    setMovieFormDirector('');
    setMovieFormColor('');
  }

  //on submit, call the handleSubmit() that will add a movie to state by calling props.submitMovie in the correct way.
  //on change for each input, call the appropriate state handler prop with the correct e.target.value to update App.js state.
  return <form className='movie-form' onSubmit={handleSubmit}>
    <label>
          Title
      <input required value={movieFormTitle} onChange={e => setMovieFormTitle(e.target.value)} />
    </label>
    <label>
        Director
      <input required value={movieFormDirector} onChange={e => setMovieFormDirector(e.target.value)} />
    </label>
    <label>
        Year Released
      <input required value={movieFormYearReleased} onChange={e => setMovieFormYearReleased(e.target.value)} />
    </label>
    <label>
        Poster Color
      <select value={movieFormColor} onChange={e => setMovieFormColor(e.target.value)}>
        <option value='#fbf8cc'>Yellow</option>
        <option value='#fde4cf'>Orange</option>
        <option value='#f1c0e8'>Pink</option>
        <option value='#cfbaf0'>Purple</option>
        <option value='#a3c4f3'>Blue</option>
        <option value='#b9fbc0'>Green</option>
      </select>
    </label>
    <button>Make Poster</button>
  </form>;
}
