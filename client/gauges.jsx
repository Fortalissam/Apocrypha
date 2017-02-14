var React = require("react");
var Caroussel = require("./caroussel.jsx");

class GaugesContainer extends React.Component{
    constructor (props){
        super(props);
    }

    render(){
        return (
            <div className="" style={{margin: "1em"}}>
                <h1>Some content</h1>
                <Caroussel/>
            </div>
        )
    }
}

module.exports = GaugesContainer;