import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { MoviesStateType } from '../types';
import { BACKDROP_PATH } from './MovieDetail';

export const JumboEl = styled.div<{ backdrop: string }>`
  height: 375px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem;
  color: white;
  box-shadow: 0 0 9px 3px white;
  /* margin-top: 4rem; */
  transition: background 1s;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h2 {
    padding: 1rem;
  }
`;

const Jumbo = ({ styleOveride }: { styleOveride: object }) => {
  const [background, setbackground] = useState(
    'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  );
  const results = useSelector(
    (state: { movieResults: MoviesStateType }) => state.movieResults.results,
  );

  useEffect(() => {
    console.log('ran useEffect');

    const interval = setInterval(() => {
      let chosenMovie = Math.floor(Math.random() * results.length);
      setbackground(
        `${BACKDROP_PATH}${results[chosenMovie]?.['backdrop_path']}`,
      );
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <JumboEl style={styleOveride} backdrop={background}>
      {/* <h2>TypeScript Redux Cinema</h2> */}
    </JumboEl>
  );
};

export default Jumbo;
