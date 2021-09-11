import React, { Component } from "react";
import { TextField } from "@material-ui/core"

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <TextField value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
            </div>
        )
    }
}

export default Login;
