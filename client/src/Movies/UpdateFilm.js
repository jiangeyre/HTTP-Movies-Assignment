import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';

const UpdateFilm = props => {
    const [film, setFilm] = useState({
        title: "",
        director: "",
        metascore: 0,
        stars: []
    });

    const id = props.match.params.id;

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res => {
                setFilm(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleChanges = e => {
        e.preventDefault();
        let value = e.target.value;

        if(e.target.name === 'stars'){
            value = [value];
        }

        setFilm({
            ...film,
            [e.target.name]: value,
            id: id
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${film.id}`, film)
            .then(res => {
                setFilm(res.data);
                props.history.push(`/movies/${film.id}`);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="film-card">
          <h1>Update Film Card.</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={film.title}
              onChange={handleChanges}
            />{" "}
            <br />
            <input
              type="text"
              name="director"
              placeholder="Director"
              value={film.director}
              onChange={handleChanges}
            />
            <br />
            <input
              type="text"
              name="metascore"
              placeholder="Metascore"
              value={film.metascore}
              onChange={handleChanges}
            />
            <br />
            <input
              type="text"
              name="stars"
              placeholder="stars"
              value={film.stars}
              onChange={handleChanges}
            />
            <br />
            <button> Submit </button>
          </form>
        </div>
    );
};

export default UpdateFilm;