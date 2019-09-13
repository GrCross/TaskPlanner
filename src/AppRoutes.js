import React from 'react'
import {Route, Switch} from "react-router-dom";
import Login from "../src/component/Login"
import Todo from "./component/TodoApp"

const AppRoutes = () =>(
    <App>
        <Switch>
            <Route exact path="/" compoent ={Login}/>
            <Route exact path="/" compoent ={Todo}/>
        </Switch>
    </App>


);

export default AppRoutes;