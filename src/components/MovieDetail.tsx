import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MovieType } from '../types';
import { POSTER_PATH } from './Movie';
import { getMovieDetail } from '../moviesAPI';

const MovieWrapper = styled.div<{ backdrop: string }>`
  position: relative;
  padding-top: 50vh;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: black;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;

const LoadingContainer = styled.div`
  background: black;
  padding: 5rem;
  opacity: 0.8;

  #loading {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

const MovieDetail = ({
  match: {
    params: { id },
  },
}: {
  match: { params: { id: string } };
}) => {
  const [movie, setMovie] = useState<MovieType | null>(null);

  const fetchMovieDetail = async () => {
    const movie = await getMovieDetail(id);
    setMovie(movie);
  };

  useEffect(() => {
    if (movie === null) {
      fetchMovieDetail();
      console.log('useEffect');
    }
  }, []);

  return movie ? (
    <MovieWrapper
      data-testid="backdrop"
      backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}
    >
      <MovieInfo>
        <div id={`${movie.id}`}>
          <img
            data-testid="poster "
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div>
          <h1 data-testid="movie-title">{movie.title}</h1>
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  ) : (
    <LoadingContainer>
      <h1>Loading...</h1>
      <div id="loading"></div>
    </LoadingContainer>
  );
};

export default MovieDetail;
