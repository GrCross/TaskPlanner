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
import Divider from "@material-ui/core/Divider";
import {MDBAlert, MDBIcon} from "mdbreact";
import {registerUser} from "../Data-provider";


export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email: "",
            password: "",
            confirmPassword: "",
            path:'/register'
        };
        this.handleName = this.handleName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    }
    handleName(e){
        this.setState({name:e.target.value})
    }

    handleEmail(e) {
        this.setState({ email: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    handleConfirmPassword(e) {
        this.setState({ confirmPassword: e.target.value });
    }

    async handleSubmit(e){
        e.preventDefault()
        var name = this.state.email.trim();
        var email = this.state.email.trim();
        var password = this.state.password.trim();
        var confirmPassword = this.state.confirmPassword.trim();
        if(!email || !password){
            return;
        }
        if(password !== confirmPassword){
            alert("the passwords doesn't match");
            return;
        }

        await this.setState({ isLoggedIn: true });
        await this.setState({ path: "/" });
        await localStorage.setItem("isLoggedIn", this.state.isLoggedIn);
        await localStorage.setItem("email", this.state.email);
        await localStorage.setItem("name", this.state.name);
        await localStorage.setItem("password", this.state.password);

        const register = await registerUser(name,email,password);
        console.log(register);

        /*fetch('http://localhost:8080/taskPlanner/users/', {
			method: 'POST',
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				this.setState({
					user:json
				});
			});*/

    }


    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className="layout" >

                    <Paper className="paper">
                        <Avatar className="avatar">
                            <MDBIcon icon="user-alt" />
                        </Avatar>
                        <Typography variant="headline">Register</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <Input id="name" name="name" autoComplete="name"
                                       value={this.state.name}
                                       onChange={this.handleName} autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email"
                                       value={this.state.email}
                                       onChange={this.handleEmail} autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.handlePassword}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="confirmPassword">Confirm password</InputLabel>
                                <Input name="confirmPassword" type="password" id="confirmPassword" autoComplete="current-ConfirmPassword"
                                       value={this.state.confirmPassword}
                                       onChange={this.handleConfirmPassword}
                                />
                            </FormControl>

                            <Button  onClick={this.handleSubmit} fullWidth variant="raised" color="primary">
                                <Link style={{ color: 'black' }} to={{pathname:this.state.path}}>
                                    Register
                                </Link>
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}