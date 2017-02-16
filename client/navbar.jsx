import * as React from "react";
import {Link} from "react-router";

class Navbar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            loggedIn : false
        }
    }

    render(){


        var loginOrLogout = () => {
            if (this.state.loggedIn){
                return(
                    <button className="pt-button pt-minimal pt-icon-user" onClick={logout}>Logout</button>
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
                    {loginOrLogout()}
                </div>
            </nav>
        );
    }
}

module.exports = Navbar;