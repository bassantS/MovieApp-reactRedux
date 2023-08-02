import { allMovies } from "../types/movieTypes";

const initialValue = { movies: [], pageCount: 0 };

export const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case allMovies:
      return { movies: action.data, pageCount: action.pageCount };

    default:
      return state;
  }
};
