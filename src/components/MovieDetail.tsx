import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MovieType } from '../types';
import { POSTER_PATH } from './Movie';
import { getMovieDetail } from '../moviesAPI';

const MovieWrapper = styled.div<{ backdrop: string }>`
  position: relative;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover;

  @media (min-width: 1024px) {
    padding-top: 50vh;
  }


`;

const MovieInfo = styled.div`
  background: black;
  text-align: left;
  padding: 1rem;
  display: flex;
  flex-direction: column;


  @media (min-width: 1024px) {
    flex-direction: row;
    > div {
      margin-left: 20px;
    }

    img {
      position: relative;
      top: -5rem;
    }
  }
`;

const MovieDetailText = styled.div`
 margin: 0;

 h1 {
  font-size: 1rem;
 }

 @media (min-width: 1024px) {
    h1 {
      font-size: 3.2rem;
    }
  }

`

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
    console.log(movie);

    setMovie(movie);
  };

  useEffect(() => {
    if (movie === null) {
      fetchMovieDetail();
    }
  }, []);

  return movie ? (
    <MovieWrapper
      className='movie-detail-wrapper'
      backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}
    >
      <MovieInfo>
        <div id={`${movie.id}`}>
          <img
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <MovieDetailText>
          <h1 >{movie.title}</h1>
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
        </MovieDetailText>
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
