import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FilmListesi from "./Filmler/FilmListesi";
import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";
import NavBar from "./NavBar";
import Film from "./Filmler/Film";

export default function App() {
  const [saved, setSaved] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get("http://localhost:5001/api/filmler")
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Sunucu Hatası", error);
        });
    };
    FilmleriAl();
  }, []);
  useEffect(() => {
    const updateSavedMovies = saved
      .map((savedId) => {
        return movieList.find((movie) => movie.id === savedId);
      })
      .filter((movie) => !!movie);

    setSavedMovies(updateSavedMovies);
  }, [saved, movieList]);

  const KaydedilenlerListesineEkle = (id) => {
    if (!saved.includes(id)) {
      setSaved([...saved, id]);
    }
  };

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <FilmListesi movies={movieList} onSave={KaydedilenlerListesineEkle} />
        </Route>
        <Route path="/film/:id">
          <Film onSave={KaydedilenlerListesineEkle} />
        </Route>
        <Route path="/saved">
          <KaydedilenlerListesi list={savedMovies} />
        </Route>
      </Switch>
    </Router>
  );
}
