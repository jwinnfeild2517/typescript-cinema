import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MovieType } from '../types';

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;

const ImageWrapper = styled.div`
  height: 12rem;
  max-height: 12rem;
  position: relative;
  transition: height 2s;
  &:hover {
    transform: scale(1.06);
    div {
      transition: height 1s;
      height: 100%;
      opacity: 0.9;

      background-color: #003049;
    }
  }
  /* box-shadow: 0 0 15px black; */

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

const MovieDetail = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: 0;
  background: #fe7f2d;
  font-size: 14px;
  color: black;
  font-weight: bold;
  width: 100%;
  height: 3rem;
  line-height: 13px;
  color: white;
`;

export const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }: { movie: MovieType }) => (
  <Link to={`/${movie.id}`}>
    <ImageWrapper id={`${movie.id}`}>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      <MovieDetail>
        <p>{movie.title}</p>
      </MovieDetail>
    </ImageWrapper>
  </Link>
);

export default Movie;
