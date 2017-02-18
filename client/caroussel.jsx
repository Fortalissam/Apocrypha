'use strict';

let React = require("react");
import {Button, Intent} from "@blueprintjs/core"
import {connect} from "react-redux"

class Caroussel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            leftmost: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({leftmost: this.state.leftmost +1});
    }

    render(){
        return(
            <div>
                <h2>{this.props.leftmost}</h2>
                <Button intent={Intent.PRIMARY} text="Hello carrousel" onClick={this.props.onCounterClick}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        leftmost: state.counter.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCounterClick : () => {
            dispatch({type: 'increment'})
        }
    }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(Caroussel);