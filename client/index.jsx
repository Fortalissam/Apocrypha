var React = require("react");
var reactDom = require("react-dom");
import {Button, Intent, } from "@blueprintjs/core";
import Navbar from './navbar.jsx'
require("../node_modules/@blueprintjs/core/dist/blueprint.css");
var Gauges = require("./gauges.jsx");
require("promise-polyfill");
require("whatwg-fetch");
import {Route, Router, browserHistory} from "react-router"
import Login from './login.jsx'
import {Provider} from 'react-redux'
import store from "./redux"
import {compose, createStore} from 'redux'
import persistState from 'redux-localstorage'
import Signup from "./signup.jsx"

const enhancer = compose(
    persistState()
);

const finalStore = createStore(store,enhancer);

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
            <Provider  store={finalStore}>
                <Router history={browserHistory}>
                    <Route path="/" component={Layout}>
                        <Route path="/login" component={Login}/>
                        <Route path="/gauges" component={Gauges}/>
                        <Route path="/signup" component={Signup}/>
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