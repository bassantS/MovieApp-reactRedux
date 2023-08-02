import { allMovies, movieApi } from "../types/movieTypes";
import axios from "axios";

//middleware for getting movies from api when using redux
//thunk bdl el async,await bs ht3ml error falazm ast5dm dispatch w async w await m3aha
//dispatch astna ely hyrg3 bl kaml wb3den return ll reducer
export const getAllMovie = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(movieApi);
      dispatch({
        type: allMovies,
        data: res.data.results,
        pageCount: res.data.total_pages,
      });
    } catch (error) {
      // Handle any error that occurs during the API request
      console.log("Error:", error);
    }
  };
};

export const searchMovie = (word) => {
  return async (dispatch) => {
    const res = await axios.get(movieApi + `&query=${word}`);
    dispatch({
      type: allMovies,
      data: res.data.results,
      pageCount: res.data.total_pages,
    });
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(movieApi + `&page=${page}`);
    dispatch({
      type: allMovies,
      data: res.data.results,
      pageCount: res.data.total_pages,
    });
  };
};
