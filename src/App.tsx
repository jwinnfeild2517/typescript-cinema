import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import MovieDetail from './components/MovieDetail';
import styled from 'styled-components';

const Nav = styled.nav`
  font-size: 1.7rem;
  padding: 0rem 1rem;
  text-align: left;
  margin: 1rem 0;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media screen and (min-width: 769px) {
    font-size: 2.5rem;
  }

`

function App() {
  return (
    <div style={{
      minHeight: '100vh'
    }}>
      <Nav>
        Typescript Redux Cinema
      </Nav>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
