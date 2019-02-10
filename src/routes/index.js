// Node Modules
import React from 'react';

// Components
import { Switch, Route } from 'react-router-dom';
import Home from './Home';


const AppRouter = () => (
  <Switch>
    <Route exact path='/' component={Home} />
  </Switch>
);


export default AppRouter;
