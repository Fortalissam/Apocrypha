var React = require("react");
var reactDom = require("react-dom");
import {Button, Intent, } from "@blueprintjs/core";
var Navbar = require("./navbar.jsx");
require("../node_modules/@blueprintjs/core/dist/blueprint.css");
var Gauges = require("./gauges.jsx");
require("promise-polyfill");
require("whatwg-fetch");

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <Navbar />
                <Gauges/>
            </div>
        )
    }
}

reactDom.render(
    <App/>,
    document.getElementById("content")
);