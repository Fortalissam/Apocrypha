import * as React from "react";

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav className="pt-navbar">
                <div className="pt-navbar-group pt-align-left">
                    <div className="pt-navbar-heading">Apocrypha</div>
                </div>
            </nav>
        );
    }
}

module.exports = Navbar;
