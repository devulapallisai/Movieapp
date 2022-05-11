import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    movies:[],
    shows:[],
    selectMovieOrShow:{},
    loading:true
}
export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (term) => {
      if(term){
        const response = await axios.get(
          `https://omdbapi.com/?apikey=baf839d4&s=${term}&type=movie`
        );
        return response.data;
      }else{
        const response = await axios.get(
          `https://omdbapi.com/?apikey=baf839d4&s=Avengers&type=movie`
        );
        return response.data;
      }
    }
  );
export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
      if(term){
        const response = await axios.get(
          `https://omdbapi.com/?apikey=baf839d4&s=${term}&type=series`
        );
        return response.data;
      }else{
        const response = await axios.get(
          `https://omdbapi.com/?apikey=baf839d4&s=Avengers&type=series`
        );
        return response.data;
      }
    }
  );

  export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => { const response = await axios.get(
      `https://omdbapi.com/?apikey=baf839d4&s&i=${id}&Plot=full`
    );
      return response.data;
    }
  );
const movieSlice =  createSlice({
    name:"movies",
    initialState,
    reducers:{
        
        removeSelectedmovieorshow:(state)=>{
          state.selectMovieOrShow={}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: (state) => {
          console.log("Pending");
          return {...state,loading:true}
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          return { ...state, movies: payload,loading:false };
        },
        [fetchAsyncMovies.rejected]: (state) => {
          console.log("Rejected!");
          return {...state,loading:false}
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          return { ...state, shows: payload };
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          return { ...state, selectMovieOrShow: payload };
        },
      },
})

export const {removeSelectedmovieorshow}=movieSlice.actions
export default movieSlice.reducer