import React from 'react'
import {Route, Switch } from 'react-router-dom'
import '../style/site.css'

import Home from './Home'
import Catalog from './Catalog'
import Submit from './Submit'
import Details from './Details'
import MyPosts from './My-Posts'

let Routes = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/details/:id" component={Details}/>
        <Route path="/catalog" exact component={Catalog}/>
        <Route path="/myPosts" component={MyPosts} />
        <Route path="/submit" component={Submit}/>
    </Switch>
)

export default Routes