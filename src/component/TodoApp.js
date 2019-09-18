import App from "../App";
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { TodoList } from './TodoList';
import moment from "moment";

import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../css/Todo.scss"

import {
    FloatingMenu,
    MainButton,
    ChildButton,
} from 'react-floating-button-menu';

import './Login.css'
import {TodoCardList} from "./TodoCardList";
import {MDBBtn, MDBContainer, MDBIcon, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";
import Fab from "@material-ui/core/Fab";
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        modal6: false,
        modal7: false
    }
    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }



    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <MDBContainer>
                        <MDBContainer className="container">
                            <Fab onClick={this.toggle(8)} style={{position: "absolute", left:"78%",bottom:"5%",zIndex:"10"}} color="white" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </MDBContainer>

                        <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="100%">
                            <MDBModalHeader toggle={this.toggle(8)}>Create your TODO</MDBModalHeader>
                            <MDBModalBody>
                                <form >
                                    <FormControl margin="normal" fullWidth>
                                        <label htmlFor="new-todo-Text">
                                            Text:
                                        </label>
                                        <TextField
                                            id="new-todo-text"
                                            onChange={this.handleChange}
                                            value={this.state.text}/>
                                    </FormControl>
                                    <FormControl margin="normal" fullWidth>
                                        <label htmlFor="new-todo-Priority">
                                            Priority:
                                        </label>
                                        <TextField
                                            id="new-todo-priority"
                                            onChange={this.handleChange}
                                            value={this.state.priority}
                                            type="number"/>
                                    </FormControl>
                                    <FormControl margin="normal" fullWidth>
                                        <label htmlFor="new-todo-dueDate2">
                                            dueDate:
                                        </label>
                                        <TextField
                                            id="new-todo-dueDate"
                                            onChange={this.handleChange}
                                            value={this.state.dueDate}
                                            type="date"/>
                                    </FormControl>
                                </form>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>
                                <MDBBtn onClick={this.handleSubmit} color="primary">Save changes</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>
                    </MDBContainer>
                    <TodoCardList items= {this.state.items}/>

                </main>
            </React.Fragment>

        );
    }

    handleChange(e) {
        if(e.target.id === "new-todo-text"){
            this.setState({text:e.target.value});
        }else if (e.target.id === "new-todo-priority") {
            this.setState({priority: e.target.value});
        }else if(e.target.id === "new-todo-dueDate"){
            this.setState({dueDate:e.target.value});

        }
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
        if (!this.state.text.length || !this.state.dueDate.length || !this.state.priority.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            priority:this.state.priority,
            dueDate:this.state.dueDate,
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority:'',
            dueDate: ''
        }));
    }
}

export default TodoApp;