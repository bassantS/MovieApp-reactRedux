import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationC from "./PaginationC";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovie } from "./../redux/actions/movieAction";

const MoviesList = ({ getCurrentPage, pageCount }) => {
  const [movies, setmovies] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovie());
  }, []);
  
  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setmovies(dataMovies);
  }, [dataMovies]);

  if (!movies || movies.length === 0) {
    return <h2 className="text-center p-5">لا يوجد افلام</h2>;
  }
  return (
    <Row className="mt-3">
      {movies.map((movie) => {
        return <CardMovie key={movie.id} movie={movie} />;
      })}
      {movies.length >= 1 ? (
        <PaginationC getCurrentPage={getCurrentPage} pageCount={pageCount} />
      ) : null}
    </Row>
  );
};

export default MoviesList;
