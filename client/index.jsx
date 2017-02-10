var React = require("react");
var reactDom = require("react-dom");
import {Button, Intent, } from "@blueprintjs/core";
//import {navbar} from "./navbar.jsx";
require("../node_modules/@blueprintjs/core/dist/blueprint.css");

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