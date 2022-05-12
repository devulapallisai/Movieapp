import axios from "axios";
import React, { useEffect } from "react";
import Movielisting from "../Movielisting/Movielisting";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../redux/movies/movies";
import "../../index.scss";
import { AppDispatch } from "../../redux/store";
function Home() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchAsyncMovies("Avengers"));
    dispatch(fetchAsyncShows("Avengers"));
  }, []);

  return (
    <div className="banner-img container">
      <Movielisting />
    </div>
  );
}

export default Home;
