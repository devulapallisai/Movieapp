import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetail,
  removeSelectedmovieorshow,
} from "../../redux/movies/movies";
import "../../index.scss";
import "./Movie.scss";
function Movie() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const moviedata = useSelector((state) => state.movies.selectMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedmovieorshow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section container">
      {Object.keys(moviedata).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{moviedata.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> :{" "}
                {moviedata.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {moviedata.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {moviedata.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {moviedata.Year}
              </span>
            </div>
            <div className="movie-plot">{moviedata.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{moviedata.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{moviedata.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{moviedata.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{moviedata.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{moviedata.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={moviedata.Poster} alt={moviedata.Title} />
          </div>
        </>
      )}
    </div>
  );
}

export default Movie;
