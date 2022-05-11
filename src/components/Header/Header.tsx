import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import movie from "../../assets/movie.gif";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../redux/movies/movies";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (term !== "") {
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
    } else {
      alert("Please enter the movie name. It is null now :(");
    }
    setTerm("");
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img src={movie} alt="movie" className="logoimg" />
        </div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
