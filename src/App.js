import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path = '/' exact></Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
