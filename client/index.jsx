var React = require("react");
var reactDom = require("react-dom");
import {Button, Intent, } from "@blueprintjs/core";
var Navbar = require("./navbar.jsx");
require("../node_modules/@blueprintjs/core/dist/blueprint.css");


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <Navbar />
                <Button text="Click" intent={Intent.PRIMARY}/>
            </div>
        )
    }
}

reactDom.render(
    <App/>,
    document.getElementById("content")
);