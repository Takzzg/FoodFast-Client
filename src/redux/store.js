import {legacy_createStore as createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"
import combineReducers from "./reducers/index"
import { configureStore } from '@reduxjs/toolkit';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
    combineReducers,
    composeEnhancer(applyMiddleware(thunk)),
   
)
