import React from 'react'

class Signup extends React.Component {
    constructor (props){
        super(props)

        this.state = {
            username: "",
            password: "",
            passwordConfirmation: ""
        }

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
                    console.log(document.cookie);
                    this.props.toggleLogin();
                    window.location.href = '/';
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

module.exports = Signup;