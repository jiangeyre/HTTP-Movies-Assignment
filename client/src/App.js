import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import AddFilm from './Movies/AddFilm';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      savedList: []
    };
  };

  addToSavedList = movie => {
    console.log(this.state.savedList);

    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({savedList});
  };

  render() {
    return (
      <div>
        <SavedList list={this.savedList} />
        <Link to="/addfilm">Add New Film!</Link>
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => {
            return (
              <Movie {...props} addToSavedList={this.addToSavedList} />
            )
          }}
        />
      </div>
    );
  }
};