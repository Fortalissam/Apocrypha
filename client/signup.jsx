import React from 'react'
import {ApoToaster} from "./toaster.js"
import {Intent} from "@blueprintjs/core"
import {connect} from "react-redux"
import {ActionTypes} from "./redux/constants.js"

class Signup extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            username: "",
            password: "",
            passwordConfirmation: ""
        };

        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    signup(event){
        event.preventDefault();

        fetch("./api/signup",
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
                            this.props.toggleLogin();
                            this.context.router.push("/");
                            ApoToaster.show({message: "Successfully signed up!", intent: Intent.SUCCESS})
                        }.bind(this))
                }
                else if (payload.status == 403){
                    ApoToaster.show({message: "User with this name already exists", intent: Intent.DANGER})
                }
            }.bind(this))
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name]: value});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.signup}>
                    <label className="pt-label">
                        Username
                        <input name="username" className="pt-input" type="text" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label className="pt-label">
                        Password
                        <input name="password" className="pt-input" type="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <label className="pt-label">
                        Password confirmation
                        <input name="passwordConfirmation" className="pt-input" type="password" value={this.state.passwordConfirmation} onChange={this.handleChange}/>
                    </label>
                    <button type="submit" className="pt-button pt-intent-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = function(dispatch){
    return ({
        toggleLogin : ()=>{dispatch({type: ActionTypes.auth.LOGIN})}
    })
};

Signup.contextTypes = {
    router: React.PropTypes.object
};

module.exports = connect(null, mapDispatchToProps)(Signup);