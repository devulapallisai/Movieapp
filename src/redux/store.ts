import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from '../redux/movies/movies';

export const store=configureStore({
    reducer:{
        movies:moviesReducer
    },
})