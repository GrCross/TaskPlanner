import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import Redirect from "react-router-dom/Redirect";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


export class Login extends React.Component {

    constructor(props) {
        super(props);
        localStorage.setItem("admin", "4dm1n");
        this.state = {user: "", password: "", userExist: false, userPasswordMatch: false}
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerLogIn = this.handlerLogIn.bind(this);
    }


    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className="layout">

                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon/>
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form className="form" onSubmit={this.handlerLogIn}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" value={this.state.user}
                                       onChange={this.handlerChange} autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.handlerChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handlerChange(e) {
        if (e.target.id === "email") {
            this.setState({user: e.target.value});
        } else if (e.target.id === "password") {
            this.setState({password: e.target.value});
        }
    }

    handlerLogIn(e) {
        event.preventDefault();
        console.log(this.state);
        const userPassword = localStorage.getItem(this.state.user);
        console.log("holaa");
        console.log(userPassword);
        if (userPassword === null) {
            localStorage.setItem("isLoggedIn", "false");
        } else {
            if (this.state.password === userPassword) {
                localStorage.setItem("isLoggedIn", "true");
            }else localStorage.setItem("isLoggedIn", "false");
        }

    }


}