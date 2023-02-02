import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import MovieDetail from './components/MovieDetail';
import styled from 'styled-components';

function App() {
  return (
    <div>
      <nav
        style={{
          fontSize: '2.5rem',
          padding: '0rem 1rem',
          textAlign: 'left',
          margin: '1rem 0',
          marginBottom: '3.5rem',
        }}
      >
        Typescript Redux Cinema{' '}
      </nav>
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
