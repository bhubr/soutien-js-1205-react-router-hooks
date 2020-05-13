import React from 'react';
import Character from './components/Character';

import './App.css';
import { Switch, Route, Link, useParams } from 'react-router-dom'

const ComponentTest = () => <h1>Test</h1>

const ShowDate = (props) => {
  // const { year, month, day } = props.match.params;
  const { year, month, day } = useParams();
  return <div>
    <p>{day}/{month}/{year}</p>
    <button type="button" onClick={() => props.history.push('/')}>back to home</button>
  </div>;
}

function App() {
  return (
    <React.Fragment>
      <nav>
        <Link to="/character/1">Luke Starkiller</Link>
        <Link to="/character/5">Leïa Starkiller</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={ComponentTest} />
        <Route path="/character/:id" component={Character} />
        <Route path="/:year/:month/:day" component={ShowDate} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
