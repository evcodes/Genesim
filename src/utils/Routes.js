import React from 'react';

// different pages on the site
import Home from '../pages/Home/index.js';
import About from '../pages/About';
import Archives from '../pages/Archives';
import NoMatch from '../pages/NoMatch';

import Navbar from '../components/NavBar/Navbar.js'
// dependies from react-router-dom
import {Route,Switch} from 'react-router-dom';

export const Routes = () => {
    return(
        <div>
            <Navbar/>
            <Switch>
                <Route exact path ="/" component = { Home }/>
                <Route exact path ="/Archive" component = { Archives }/>
                <Route exact path ="/About" component = { About }/>
                <Route component = { NoMatch }/>
            </Switch>
        </div>
    );
}