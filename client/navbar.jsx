import * as React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {ActionTypes} from "./redux/constants.js"
import {ApoToaster} from "./toaster.js"
import {Intent} from "@blueprintjs/core"

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
                    this.context.router.push("/");
                    ApoToaster.show({message: "Logged out", intent: Intent.WARNING})
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
                    <Link to="/"><p className="pt-navbar-heading">Apocrypha</p></Link>
                </div>
                <div className="pt-navbar-group pt-align-right">
                    <Link to="/gauges"><button className="pt-button pt-minimal">Gauges</button></Link>
                    <span className="pt-navbar-divider"></span>
                    {loginOrLogout(this.props.loggedIn)}
                    <span className="pt-navbar-divider" ></span>
                    <button className="pt-button pt-minimal pt-icon-moon" onClick={this.props.toggleTheme}/>
                </div>
            </nav>
        );
    }
}

Navbar.contextTypes = {
    router: React.PropTypes.object
};

const MapStateToProps = function(state){
    return {
        loggedIn : state.auth.loggedIn,
        dark: state.settings.dark
    }
};

const MapDispatchToProps = function(dispatch){
    return {
        logoutUser: () => {
            dispatch({type: ActionTypes.auth.LOGOUT})
        },
        toggleTheme: () =>{
            dispatch({type: ActionTypes.settings.TOGGLE_THEME})
        }
    }
};

module.exports = connect(MapStateToProps, MapDispatchToProps)(Navbar);