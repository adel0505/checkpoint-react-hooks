import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import { listDefaultMovies } from "./components/data";

function App() {
  const [moviesList, setmoviesList] = useState(listDefaultMovies);
  const [filterTitle, setfilterTitle] = useState("");
  const [filterRate, setfilterRate] = useState(0);

  return (
    <div className="App">
      <Header
        setfilterTitle={setfilterTitle}
        setfilterRate={setfilterRate}
        filterRate={filterRate}
        setmoviesList={setmoviesList}
        moviesList={moviesList}
      />
      <MovieList
        moviesList={moviesList}
        filterTitle={filterTitle}
        filterRate={filterRate}
      />
    </div>
  );
}

export default App;
