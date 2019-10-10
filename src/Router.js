import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import {ProtectedRoute} from './ProtectedRoute'
import Enter from './Components/Enter';
import Create from './Components/CreateCommand'
import Kitchen from './Components/KitchenInterfaz';
import Select from './Components/SelectInterfaz'
import Orders from './Components/SeeCommands'

const Router = () => (


  <BrowserRouter>
    <Switch>
      <ProtectedRoute path= "/create" component = {Create}/>
      <ProtectedRoute path= "/select" component = {Select}/>
      <ProtectedRoute path= "/orders" component = {Orders}/>
      <ProtectedRoute path= "/kitchen" component = {Kitchen}/> 
      <Route exact path = "/" component ={Enter}/>
      <Route path = '*' component = {() => '404 NOT FOUND'}/> 
    </Switch>
  </BrowserRouter>
);

export default Router;