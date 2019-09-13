import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './TodoList';

import {Login} from './component/Login.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import TodoApp from "./TodoApp";
import moment from "moment";
import Button from "@material-ui/core/Button";
import {LocalGasStationOutlined} from "@material-ui/icons";


class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        localStorage.setItem('admin', "4dm1n");

    }


    render() {
        const LoginView = () => (
            <Login/>
        );

        const TodoView = () => (
            <div>
                <TodoApp/>
            </div>
        );

        function f(e) {
            console.log(e);

            console.log(typeof temp);
            if(e==="true"){
            //if(localStorage.getItem("isLoggedIn")){
                return TodoView;
            }else{
                console.log(localStorage.getItem("isLoggedIn"));
                console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa");
                return LoginView;
            }

        }

        return (
            <Router>
                <div className="App">
                    <br/>
                    <br/>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={f(localStorage.getItem("isLoggedIn"))} />
                    </div>
                </div>
            </Router>
        );

    }

}

export default App;
