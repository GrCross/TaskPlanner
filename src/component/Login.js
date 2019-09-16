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
        this.state = {
            email: "",
            password: "",
            isLoggedIn: false,
            path: "/"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleEmail(e) {
        this.setState({ email: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    async handleSubmit(e){
        e.preventDefault()
        var email = this.state.email.trim();
        var password = this.state.password.trim();
        if(!email || !password){
            return;
        }
        if (localStorage.getItem("email") === email && localStorage.getItem("password") === password) {

            await this.setState({ isLoggedIn: true });
            await this.setState({ path: "/home" });
            localStorage.setItem("isLoggedIn", this.state.isLoggedIn);
        }
    }


    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className="layout" >

                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon/>
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form className="form" onSubmit={this.handlerLogIn}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" value={this.state.email}
                                       onChange={this.handleEmail} autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.handlePassword}
                                />
                            </FormControl>
                            <Button  onClick={this.handleSubmit} fullWidth variant="raised" color="primary">
                                <Link style={{ color: 'black' }} to={{pathname: this.state.path}}>
                                    Sign in
                                </Link>

                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}