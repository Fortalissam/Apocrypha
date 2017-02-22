import React from "react"
import Navbar from './navbar.jsx'
import {connect} from "react-redux"

class Layout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.dark){
            document.body.style.backgroundColor = "#394B59";
        } else {
            document.body.style.backgroundColor = "#FFFFFF";
        }

        return(
            <div className={this.props.dark?"pt-dark":""}>
                <Navbar />
                <div className="contentPadding">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

function MapStateToProps(state){
    return {
        dark: state.settings.dark
    }
};

module.exports = connect(MapStateToProps)(Layout);