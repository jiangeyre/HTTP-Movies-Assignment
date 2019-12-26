
import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateFilm from "./Movies/UpdateFilm";
import AddFilm from './Movies/AddFilm';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Link to="/add">Add New Movie</Link>
      <Route exact path="/" component={MovieList} />
      <Route exact path="/add" component={AddFilm} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route path="/update-movie/:id" component={UpdateFilm} />
    </>
  );
};

export default App;