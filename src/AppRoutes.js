import React from 'react';
import {Route, Router, Switch} from "react-router-dom"

import {Login} from './component/Login.js';
import {Home} from './component/Home'
import TodoApp from "./component/TodoApp";
import TodoAppModal from "./component/TodoAppModal";

export class AppRoutes extends React.Component {
    render() {
        return(
            <div>
                <Route exact path="/" component={Login}/>
                <Route exact path="/todo" component ={TodoApp}/>
                <Route exact path="/home" component ={Home}/>
            </div>
        )

    }
}

