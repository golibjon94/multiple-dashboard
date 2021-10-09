import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import RegionsData from "../allmaps/components/RegionsData";

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' exact component={Dashboard}/>
            <Route exact path='/customers' component={Customers}/>
        </Switch>
    )
}

export default Routes
