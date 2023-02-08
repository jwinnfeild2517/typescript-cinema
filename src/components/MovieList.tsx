import React, { useEffect, useState } from 'react';
import { updateMovies } from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import getMovies from '../moviesAPI';
import Movie from './Movie';
import styled from 'styled-components';
import { Pagination } from './pagination';
import { MoviesStateType } from '../types';
import Jumbo from './Jumbo';

const GridWrapper = styled.section`
  padding: 0 1rem;
  h2 {
    text-transform: capitalize;
    text-align: left;
  }

  @media (min-width: 1024px) {
    padding: 0;
  }

`;
const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 21px;

  @media (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const MovieList = () => {
  // We use the redux useSelector to access state
  const moviesList = useSelector(
    (state: { movieResults: MoviesStateType }) => state.movieResults,
  );

  // deconstruct the state object
  const { results, page, query } = moviesList || {};

  // use the useDispatch hook to call actions
  const dispatch = useDispatch();

  // fetch function call the api asynchronously & dispatch and action
  const fetchMovies = async () => {
    const data = await getMovies(query, page);
    dispatch(
      updateMovies({
        results: data.results,
      }),
    );
  };

  // if the page or query changes, update the results
  useEffect(() => {
    fetchMovies();
  }, [page, query]);

  return (
    <GridWrapper>
      <Jumbo />
      <h2 id='current-filter'>{query.replace('_', ' ')}</h2>
      {results.length ? (
        <MovieGrid>
          {results.map((movie: any) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </MovieGrid>
      ) : (
        <p>loading...</p>
      )}
      <Pagination />
    </GridWrapper>
  );
};

export default MovieList;
