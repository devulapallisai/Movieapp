import axios from "axios";
import React, { useEffect } from "react";
import Movielisting from "../Movielisting/Movielisting";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../redux/movies/movies";
import "../../index.scss";
function Home() {
  const movie = "marvel";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, []);

  return (
    <div className="banner-img container">
      <Movielisting />
    </div>
  );
}

export default Home;
