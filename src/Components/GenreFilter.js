// GenreFilter.js
import React from 'react';

function GenreFilter({ genres, onGenreSelect }) {
  return (
    <div className="genre-filter">
      <h2>Filter by Genre</h2>
      <div className="buttons">
        {genres.map((genre, index) => (
          <button key={index} onClick={() => {onGenreSelect(genre); console.log(`Selected genre: ${genre}`);}}>{genre}</button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
