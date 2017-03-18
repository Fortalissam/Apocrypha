var React = require("react");
var reactDom = require("react-dom");
import {Button, Intent, } from "@blueprintjs/core";

require("../node_modules/@blueprintjs/core/dist/blueprint.css");
var Gauges = require("./gauges.jsx");
require("promise-polyfill");
require("whatwg-fetch");
import {Route, IndexRoute, Router, browserHistory} from "react-router"
import Login from './login.jsx'
import {Provider} from 'react-redux'
import reducers from "./redux"
import {compose, createStore, applyMiddleware} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import Signup from "./signup.jsx"
import Layout from "./layout.jsx"
import Dashboard from "./dashboard.jsx"

const store = createStore(
    reducers,
    undefined,
    compose(
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(),
        autoRehydrate()
    )

);

persistStore(store).purge();

// const store = createStore(reducers);

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Provider  store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={Dashboard}/>
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