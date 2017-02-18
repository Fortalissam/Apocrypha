var React = require("react");
var reactDom = require("react-dom");
import {Button, Intent, } from "@blueprintjs/core";
var Navbar = require("./navbar.jsx");
require("../node_modules/@blueprintjs/core/dist/blueprint.css");
var Gauges = require("./gauges.jsx");
require("promise-polyfill");
require("whatwg-fetch");
import {Route, Router, browserHistory} from "react-router";
var Login = require("./login.jsx");
import {Provider} from 'react-redux'
import store from "./redux"
import {createStore} from 'redux'

class Layout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                <div>
                    <Navbar />
                    <div className="contentPadding">
                        {this.props.children}
                    </div>
                </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Provider  store={createStore(store)}>
                <Router history={browserHistory}>
                    <Route path="/" component={Layout}>
                        <Route path="/login" component={Login}/>
                        <Route path="/gauges" component={Gauges}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

reactDom.render(
    <App/>,
    document.getElementById("content")
);