import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
// ========================================================
// path store
let initState1 = {
    currentTime: new Date().toISOString()
}

function time(state = initState1, action) {
    if(action.type === "NEW_TIME"){
        let newState = {
            ...state,
            currentTime: action.newTime
        }
        return newState
    }
    return state;
}

let initState2 = {
    name: Math.random()
}

function test(state = initState2, action) {
    if(action.type === "NAME"){
        return {
            ...state,
            name: action.name
        }
    }
    return state;
}
// ========================================================
// Сборка всех функций(reducer) в 1
const appStore = combineReducers({
    time, test
});
const store = createStore(appStore);

////////////////////////////////////////////////////////////
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
