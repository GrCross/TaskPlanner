import App from "./App";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';
import moment from "moment";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";

import './component/Login.css'
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">


                    <Paper className="paper">
                        <Typography variant="headline">Todo</Typography>
                        <form onSubmit={this.handleSubmit}>
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
                            <Button type='submit'>
                                Add #{this.state.items.length + 1}
                            </Button>
                        </form>
                    </Paper>
                    <div></div>
                        <TodoList items= {this.state.items}/>

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