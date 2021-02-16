import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Arrow from "@material-ui/icons/ArrowForward";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {Link} from "react-router-dom";
import {setLoginUser} from "./user";
import "../../utils/LoginStyle.css";

function Login() {
    let [user, setUser] = useState("");
    let state = {
        disabledInfo: false
    };

    return (
        <div className="container">
            <h2 className="header">Sign In</h2>
            <div className="box">
                <TextField
                    className="txt-name"
                    id="name"
                    label="Enter your nick name"
                    value={user}
                    onChange={
                        (e) => {
                            setUser(e.target.value);
                            setDisable(e.target.value);
                        }
                    }
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle/>
                            </InputAdornment>
                        ),
                    }}
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={getName}
                    className="btn-random"
                >
                    Random
                </Button>
            </div>
            <Link to="/Home">
                <Button
                    disabled={state.disabledInfo}
                    variant="contained"
                    color="primary"
                    endIcon={<Arrow/>}
                    className="btn-continue"
                    onClick={() => {
                        setLoginUser(user);
                    }}
                >
                    Continue
                </Button>
            </Link>
        </div>
    );

    function getName() {
        let names = ["Joan", "Josep", "Emmett", "Brian", "Lowery"];
        let rand = Math.floor(Math.random() * 4);

        setUser(names[rand]);

        // let nameBox = document.getElementById("name");
        // nameBox.value = names[rand];
    }

    function setDisable(val) {
        if (val === '') {
            state.disabledInfo = true;
        } else {
            state.disabledInfo = false;
        }
    }
}

export default Login;
