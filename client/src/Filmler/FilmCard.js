import React from "react";
import { Link } from "react-router-dom";

export default function FilmCard({ film, onSave }) {
  return (
    <div className="movie-card">
      <Link to={`/film/${film.id}`}>
        <h3>{film.title}</h3>
        <p>Yönetmen: {film.director}</p>
        <p>Metascore: {film.metascore}</p>
      </Link>
      <button className="btn" onClick={() => onSave(film.id)}>
        Kaydet
      </button>
    </div>
  );
}
