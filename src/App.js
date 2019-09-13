import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './component/TodoList';

import {Login} from './component/Login.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import TodoApp from "./component/TodoApp";
import moment from "moment";
import Button from "@material-ui/core/Button";
import {LocalGasStationOutlined} from "@material-ui/icons";
import AppRoutes from './AppRoutes';


ReactDOM.render(
    <Router>
        <AppRoutes/>
    </Router>
)

export default App;
