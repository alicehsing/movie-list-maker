import React from 'react';

export default function Movie({
  title,
  director,
  year,
  color
}) {
  return <div className='movie-item' style={{ backgroundColor: color }}>
    <h3>{title}</h3>
    <p>By {director}</p>
    <p>{year}</p>
  </div>;
}
