import React from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const MovieList = ({ moviesList, filterTitle, filterRate }) => {
  return (
    <div className="grid-movies">
      {moviesList
        .filter(
          (movie) =>
            movie.title
              .toLowerCase()
              .includes(filterTitle.toLowerCase().trim()) &&
            movie.rating >= filterRate
        )
        .map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))}
    </div>
  );
};
export default MovieList;
