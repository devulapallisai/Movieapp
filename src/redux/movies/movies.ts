import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

interface moviedetails {
  Poster: string;
  Awards: string;
  Language: string;
  Genre: string;
  Actors: string;
  Director: string;
  Plot: string;
  Year: string;
  Runtime: string;
  imdbRating: string;
  imdbVotes: string;
  Title: string;
}

interface initialState {
  movies: movie | error | {};
  shows: movie | error | {};
  loading: Boolean;
  selectMovieOrShow: moviedetails | {};
}

const initialState: initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
  loading: true,
};
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term: string) => {
    const response = await axios.get(
      `https://omdbapi.com/?apikey=baf839d4&s=${term}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term: string) => {
    const response = await axios.get(
      `https://omdbapi.com/?apikey=baf839d4&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id: string) => {
    const response = await axios.get(
      `https://omdbapi.com/?apikey=baf839d4&s&i=${id}&Plot=full`
    );
    return response.data;
  }
);
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedmovieorshow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state) => {
      console.log("Pending");
      return { ...state, loading: true };
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload, loading: false };
    });
    builder.addCase(fetchAsyncMovies.rejected, (state) => {
      console.log("Rejected!");
      return { ...state, loading: false };
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, shows: payload };
    });
    builder.addCase(
      fetchAsyncMovieOrShowDetail.fulfilled,
      (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, selectMovieOrShow: payload };
      }
    );
    // [fetchAsyncMovies.pending.toString()]: (state:initialState) => {
    //   console.log("Pending");
    //   return {...state,loading:true}
    // },
    // [fetchAsyncMovies.fulfilled.toString()]: (state:initialState, { payload }:{payload:movie}) => {
    //   console.log("Fetched Successfully!");
    //   return { ...state, movies: payload,loading:false };
    // },
    // [fetchAsyncMovies.rejected.toString()]: (state:initialState) => {
    //   console.log("Rejected!");
    //   return {...state,loading:false}
    // },
    // [fetchAsyncShows.fulfilled.toString()]: (state:initialState, { payload }:{payload:movie}) => {
    //   console.log("Fetched Successfully!");
    //   return { ...state, shows: payload };
    // },
    // [fetchAsyncMovieOrShowDetail.fulfilled.toString()]: (state:initialState, { payload }:{payload:movie}) => {
    //   console.log("Fetched Successfully!");
    //   return { ...state, selectMovieOrShow: payload };
    // },
  },
});

export const { removeSelectedmovieorshow } = movieSlice.actions;
export default movieSlice.reducer;
