import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';


function Navigation() {
    return (
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/lesprops'>Les Props</Link></li>
            <li><Link to='/joueur'>Joueurs</Link></li>
            <li><Link to='/stades'>Stades</Link></li>
            <li><Link to='/ajout'>Ajout</Link></li>
        </ul>
    )
}
export default Navigation;