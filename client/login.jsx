var React = require("react");

class Login extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username: "",
            password: ""
        };

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    login(event){
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
                    window.location.href = '/'
                }
            })
    }

    handleChange (event){
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name]: value});
    }

    render(){
        return(
            <div>
                <label className="pt-label">
                    Username
                    <input name="username" className="pt-input" type="text" value={this.state.username} onChange={this.handleChange}/>
                </label>
                <label className="pt-label">
                    Password
                    <input name="password" className="pt-input" type="password" value={this.state.password} onChange={this.handleChange}/>
                </label>
                <button className="pt-button pt-intent-primary" onClick={this.login}>Login</button>
            </div>
        )
    }
}

module.exports = Login;