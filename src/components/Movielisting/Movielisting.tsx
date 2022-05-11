import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../Card/Card";
import "./Movielisting.scss";

interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface movie {
  totalResults: string;
  Response: string;
  Search: Search[];
}

interface error {
  Error: string;
  Response: string;
}

function Movielisting() {
  const movies: movie | error = useSelector(
    (state: RootState) => state.movies.movies
  );
  const shows: movie | error = useSelector(
    (state: RootState) => state.movies.shows
  );
  const loading: Boolean = useSelector(
    (state: RootState) => state.movies.loading
  );
  return (
    <div className="movie-wrapper">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="movie-list">
            <h2>Movies</h2>
            <div className="movie-container">
              {movies.Response === "True" ? (
                movies.Search.map((movie, index) => (
                  <MovieCard key={index} movie={movie} />
                ))
              ) : (
                <div className="movies-error">
                  <h4>{movies.Error}</h4>
                </div>
              )}
            </div>
          </div>
          <div className="movie-list">
            <h2>Shows</h2>
            <div className="movie-container">
              {shows.Response === "True" ? (
                shows.Search.map((movie, index) => (
                  <MovieCard key={index} movie={movie} />
                ))
              ) : (
                <div className="movies-error">
                  <h4>{shows.error}</h4>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Movielisting;
