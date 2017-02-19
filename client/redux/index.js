/**
 * Created by francois.drouin on 2/18/2017.
 */
import {combineReducers} from 'redux';

const INCREMENT = 'increment';

const initialState = {
    counter: 0,
    auth: {
        loggedIn: false
    }
};

function counterReducer(counter, action){
    switch(action.type){
        case INCREMENT:
            var incrementedCounter = counter + 1;

            return incrementedCounter;

        default:
            return counter;
    }
}

function authReducer(auth, action){
    switch(action.type){
        case "login":{
            return Object.assign({}, auth, {loggedIn : true})
        }
        case "logout":{
            return Object.assign({}, auth, {loggedIn : false})
        }
        default:
            return auth;
    }
}

export default function rootReducer (state = initialState, action){
    return {
        counter: counterReducer(state.counter, action),
        auth: authReducer(state.auth, action)
    }
}