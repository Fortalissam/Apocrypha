/**
 * Created by francois.drouin on 2/18/2017.
 */
import {combineReducers} from 'redux';

const INCREMENT = 'increment';

const initialState = {
    counter: 0
};

function counterReducer(state, action){
    switch(action.type){
        case INCREMENT:
            var incrementedCounter = state.counter.counter + 1;
            var output = Object.assign({}, state.counter, {counter: incrementedCounter});
            return output;

        default:
            return state;
    }
}

export default function rootReducer (state = initialState, action){
    return {
        counter: counterReducer(state, action)
    }
}