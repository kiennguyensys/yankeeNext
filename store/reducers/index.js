import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { cartReducer } from './cartReducer.js';
import { sessionReducer } from './sessionReducer.js';

export const initStore = (initialState = []) => {
    return createStore(
        combineReducers({cart: cartReducer, session: sessionReducer}),
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}