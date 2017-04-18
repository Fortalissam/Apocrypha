import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ActionTypes} from "../redux/constants.js"
import {ApoToaster} from "../toaster.js"
import {Intent} from "@blueprintjs/core"

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            loginFailed: false
        };

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    login(event){
        event.preventDefault();
        fetch("./api/login",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(this.state),
                credentials: 'include'
            })
            .then(function(payload){
                if (payload.status >= 200 && payload.status < 300){
                    this.props.toggleLogin();
                    ApoToaster.show({message: "Logged in!", intent: Intent.SUCCESS});
                    this.props.history.push("/");
                } else if (payload.status == 401){
                    ApoToaster.show({message: "Login information incorrect", intent: Intent.DANGER})
                } else{
                    ApoToaster.show({message: "An error occured. Please contact development team", intent: Intent.DANGER})
                }
            }.bind(this))
    }

    handleChange (event){
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name]: value});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.login}>
                    <label className="pt-label">
                        Username
                        <input name="username" className="pt-input" type="text" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label className="pt-label">
                        Password
                        <input name="password" className="pt-input" type="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <button type="submit" className="pt-button pt-intent-primary">Login</button>
                </form>
                <p>If you do not have an account, <Link to="/signup">sign up</Link>!</p>
            </div>
        )
    }
}

Login.contextTypes = {
    router: React.PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLogin : ()=>{dispatch({type: ActionTypes.auth.LOGIN})}
    }
};

module.exports = connect(null, mapDispatchToProps)(Login);