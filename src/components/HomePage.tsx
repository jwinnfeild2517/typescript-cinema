import React from 'react';
import styled from 'styled-components';
import MovieList from './MovieList';
import { FilterButtons } from './FilterButton';
import Jumbo from './Jumbo';

const Layout = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 45px;
  width: auto;
  max-width: 1100px;

  @media (min-width: 992px) {
    grid-template-columns: 25% 75%;
  }
`;

const SideBar = styled.aside`
  padding: 0 1rem;
  font-size: 15px;
`;

const HomePage = () => {
  return (
    <Layout>
      <SideBar>
        <FilterButtons />
        <Jumbo
          styleOveride={{
            height: '480px',
            boxShadow: 'none',
            display: 'block',
          }}
        />
      </SideBar>
      <MovieList />
    </Layout>
  );
};

export default HomePage;
