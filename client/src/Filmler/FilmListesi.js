import React from "react";
import FilmCard from "./FilmCard";

export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <FilmCard key={movie.id} film={movie} onSave={props.onSave} />
      ))}
    </div>
  );
}

function FilmDetayları(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>{" "}
      ;
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
