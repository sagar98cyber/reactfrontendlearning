import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';
import Home from './components/Pages/Home'
import Info from './components/Pages/Info'
import Mumbai from './components/Location/MLocation'
import NMumbai from './components/Location/NMLocation'
import Pune from './components/Location/Pune'
import Airoli from './components/stations/stations'
import Cake from './components/products/Cake'
import c2 from './components/products/c2'
import shops from './components/shops/shops';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path = '/' exact component={Home}></Route>
        <Route path = '/info' exact component={Info}></Route>
        <Route path = '/mumbai' exact component = {Mumbai}></Route>
        <Route path = '/nmumbai' exact component = {NMumbai}></Route>
        <Route path = '/p' exact component = {Pune}></Route>
        <Route path = '/airoli' exact component = {Airoli}></Route>
        <Route path = '/cake' exact component = {Cake}></Route>
        <Route path = '/c2' exact component = {c2}></Route>
        <Route path = '/shops' exact component = {shops}></Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
