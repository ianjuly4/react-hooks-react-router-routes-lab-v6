
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from 'react-router-dom';

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id;

useEffect(() =>{
  fetch(`http://localhost:4000/movies/${movieId}`)
  .then(r => r.json())
  .then(data => setMovie(data))
  .catch(error => console.error(error))
}, [movieId]);

const movieGenres = movie.genres || [];
const genres = movieGenres.map((genre) => {
  return <span key={genre}>{genre}</span>;
});
  return (
    <>
      <header>
      <NavBar/>
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>TIME: {movie.time}</p>
        {genres}
      </main>
    </>
  );
};

export default Movie;
