import React from 'react';
import { useDispatch } from 'react-redux';
import { changePage } from '../store/actions';
import styled from 'styled-components';

const PaginationEl = styled.button`
  background-color: #003049;
  margin: 2rem 0;
  width: 300px;
  color: white;
  &:hover {
    @media (min-width: 1024px) {
      background-color: #fe7f2d;
    }
  }
`;

export const Pagination = () => {
  const dispatch = useDispatch();

  return (
    <PaginationEl onClick={() => dispatch(changePage())} type="button">
      Show More
    </PaginationEl>
  );
};
