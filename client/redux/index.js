/**
 * Created by francois.drouin on 2/18/2017.
 */
import {combineReducers} from 'redux';
import {ActionTypes} from "./constants.js"

const INCREMENT = 'increment';

const initialState = {
    counter: 0,
    auth: {
        loggedIn: false
    },
    settings: {
        dark: false
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
        case ActionTypes.auth.LOGIN:{
            return Object.assign({}, auth, {loggedIn : true})
        }
        case ActionTypes.auth.LOGOUT:{
            return Object.assign({}, auth, {loggedIn : false})
        }
        default:
            return auth;
    }
}

function settingsReducer(settings, action){
    switch (action.type){
        case ActionTypes.settings.TOGGLE_THEME:{
            return Object.assign({}, settings, {dark: !settings.dark})
        }
        default:
            return settings;
    }
}

export default function rootReducer (state = initialState, action){
    let nextState = {
        settings: settingsReducer(state.settings, action),
        counter: counterReducer(state.counter, action),
        auth: authReducer(state.auth, action)
    };

    return nextState;
}