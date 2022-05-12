import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../Card/Card";
import "./Movielisting.scss";
import { RootState } from "../../redux/store";

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
  Search: Search[];
}

function Movielisting() {
  const movies: movie | error | {} = useSelector(
    (state: RootState) => state.movies.movies
  );
  const shows: movie | error | {} = useSelector(
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
              {"Response" in movies ? (
                "Error" in movies ? (
                  <h1>{movies.Error}</h1>
                ) : (
                  movies.Search.map((movie: Search, index: number) => (
                    <MovieCard movie={movie} />
                  ))
                )
              ) : (
                <>
                  <h1>Loading...</h1>
                </>
              )}
            </div>
          </div>
          <div className="movie-list">
            <h2>Shows</h2>
            <div className="movie-container">
              {"Response" in shows ? (
                "Error" in shows ? (
                  <h1>{shows.Error}</h1>
                ) : (
                  shows.Search.map((movie: Search, index: number) => (
                    <MovieCard movie={movie} />
                  ))
                )
              ) : (
                <>
                  <h1>Loading...</h1>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Movielisting;
