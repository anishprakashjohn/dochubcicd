import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import CreateDealing from '../components/CreateDealing';
import DashBoard from '../components/Dashboard';
import Header from '../components/Header'
import DealingDetails from '../components/DealingDetails'
import EditDealing from '../components/EditDealing'
import List from '../components/List';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
        <Route path="/" component={List} exact={true} />
          <Route path="/list" component={DashBoard}  />
          <Route path="/create" component={CreateDealing} />
          <Route path='/view/:id' component = {DealingDetails}/>
          <Route path='/edit/:id' component = {EditDealing}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;
  