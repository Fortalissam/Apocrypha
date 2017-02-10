import * as React from "react";

export class navbar extends React.Component{
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