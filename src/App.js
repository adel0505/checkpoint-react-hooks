import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import Add from "./components/Add";
import DetailCard from "./components/DetailCard";
import { listDefaultMovies } from "./components/data";
import { Button } from "react-bootstrap";

function App() {
  const [moviesList, setmoviesList] = useState(listDefaultMovies);
  const [filterTitle, setfilterTitle] = useState("");
  const [filterRate, setfilterRate] = useState(0);

  return (
    <div className="App">
      <div>
        <Link to="/movielist">
          <Button
            variant="outline-primary button"
            style={{ margin: 10 + "px" }}
          >
            Movies List
          </Button>
        </Link>
        <Link to="/addmovie">
          <Button variant="primary button">Add Movie</Button>
        </Link>
      </div>
      <Route
        path="/movielist"
        render={() => (
          <>
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
          </>
        )}
      />
      <Route
        path="/addmovie"
        render={() => (
          <Add setmoviesList={setmoviesList} moviesList={moviesList}></Add>
        )}
      />
      <Route
        exact
        path="/detailcard/:movieId"
        render={(props) => <DetailCard moviesList={moviesList} {...props} />}
      />
    </div>
  );
}

export default App;
