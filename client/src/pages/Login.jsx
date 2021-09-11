import React, { Component } from "react";
import * as actions from "../redux/actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentNumber } from "../redux/selectors/number";
import { connect } from "react-redux";
import { Button, TextField } from "@material-ui/core"
import '../styles/login.css'

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    componentDidMount = () => { }

    handleLogin = async() => {
        window.location = '/dashboard'

    }

    render() {
        return (
            <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "30%" }}>

                <h1>Plot Your Vibe</h1>

                <TextField style={{ marginTop: 50 }} placeholder="Email" type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />

                <TextField style={{ marginTop: 50 }} placeholder="Password" type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />

                <Button onClick={this.handleLogin} style={{ marginTop: 50 }} variant="outlined" color="primary" >Log in</Button>

            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentNumber: selectCurrentNumber
})

export default connect(mapStateToProps, actions)(Login);

// Only For Testing Redux