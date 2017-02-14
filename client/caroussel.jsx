'use strict';

let React = require("react");
import {Button, Intent} from "@blueprintjs/core"

class Caroussel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            leftmost: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({leftmost: this.state.leftmost +1});
    }

    render(){
        return(
            <div>
                <h2>{this.state.leftmost}</h2>
                <Button intent={Intent.PRIMARY} text="Hello carrousel" onClick={this.handleChange}/>
            </div>
        );
    }
}

module.exports = Caroussel;