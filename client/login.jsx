import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
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
                    console.log(document.cookie);
                    this.props.toggleLogin();
                    window.location.href = '/';
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

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLogin : ()=>{dispatch({type: 'login'})}
    }
};

module.exports = connect(null, mapDispatchToProps)(Login);