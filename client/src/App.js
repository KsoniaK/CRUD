import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import LesProps from './components/LesProps';
import Joueur from './components/Joueur';
import Stades from './components/Stades';
import Ajout from './components/Ajout';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Navigation />
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/lesprops' component={LesProps} />
                <Route exact path='/joueur' component={Joueur} />
                <Route exact path='/stades' component={Stades} />
                <Route exact path='/ajout' component={Ajout} />
            </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
