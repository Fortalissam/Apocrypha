import * as React from "react"
import {Link} from "react-router"
import {connect} from "react-redux"

class Navbar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            loggedIn : false
        };

        this.logout = this.logout.bind(this);
    }

    logout (){
        fetch("./api/logout",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'GET',
                credentials: 'include'
            })
            .then(function(payload){
                if (payload.status >= 200 && payload.status < 300){
                    console.log(document.cookie);
                    this.props.logoutUser();
                    window.location.href = '/';
                }
            }.bind(this))
    }

    render(){


        var loginOrLogout = (loginStatus) => {
            if (loginStatus){
                return(
                    <button className="pt-button pt-minimal pt-icon-user" onClick={this.logout}>Logout</button>
                )
            }
            else{
                return(
                    <Link to="/login"><button className="pt-button pt-minimal pt-icon-user">Login</button></Link>
                )
            }
        };

        return(
            <nav id="mainNavbar" className="pt-navbar">
                <div className="pt-navbar-group pt-align-left">
                    <Link to="/"><div className="pt-navbar-heading">Apocrypha</div></Link>
                </div>
                <div className="pt-navbar-group pt-align-right">
                    <Link to="/gauges"><button className="pt-button pt-minimal">Gauges</button></Link>
                    <span className="pt-navbar-divider"></span>
                    {loginOrLogout(this.props.loggedIn)}
                </div>
            </nav>
        );
    }
}

const MapStateToProps = function(state){
    return {
        loggedIn : state.auth.loggedIn
    }
};

const MapDispatchToProps = function(dispatch){
    return {
        logoutUser: () => {
            dispatch({type: 'logout'})
        }
    }
};

module.exports = connect(MapStateToProps, MapDispatchToProps)(Navbar);