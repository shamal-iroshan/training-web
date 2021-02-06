import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Arrow from '@material-ui/icons/ArrowForward';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";
import '../utils/LoginStyle.css';


let state = 'disabled';

class Login extends Component {

    render() {
        return (
            <div className="container">
                <h2 className="header">Sign In</h2>
                <div className="box">
                    <TextField
                        className="txt-name"
                        id="name"
                        label="Enter your nick name"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                            ),
                        }}
                        />

                    <Button variant="contained" color="primary" onClick={this.getName} className="btn-random">Random</Button>
                </div>
                <Link to="/Home"> 
                    <Button variant="contained" color="primary" endIcon= {<Arrow/>} className="btn-continue" onClick={e => this.navigate(e)} >Continue</Button>
                </Link>
            </div>
        )
    }

    getName(){
        let names = ['Joan', 'Joshep', 'Emmett', 'Brian', 'Lowery'];
        let rand = Math.floor(Math.random() * 4);

        let nameBox = document.getElementById("name");
        nameBox.value = names[rand];
    }

    navigate = (e) => {
        let user = document.getElementById("name").value;
        document.cookie = "user="+user;
    }
}

export default Login;
