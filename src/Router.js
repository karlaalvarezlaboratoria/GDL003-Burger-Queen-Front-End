import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import {ProtectedRoute} from './ProtectedRoute'
import Enter from './Components/Enter';
import Create from './Components/CreateCommand'

const Router = () => (


  <BrowserRouter>
    <Switch>
      <ProtectedRoute path= "/create/" component = {Create}/> 
      <Route exact path = "/" component ={Enter}/>
      <Route path = '*' component = {() => '404 NOT FOUND'}/> 
    </Switch>
  </BrowserRouter>
);

export default Router;