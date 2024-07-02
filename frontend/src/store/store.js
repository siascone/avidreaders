import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import { thunk } from 'redux-thunk';
import sessionReducer from './sessionReducer';
import booksReducer from './booksReducer';
import authorsReducer from './authorsReducer';
import readsReducer from './readsReducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    books: booksReducer,
    authors: authorsReducer,
    reads: readsReducer
});

let enhancer;
if (import.meta.env.MODE === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = (await import("redux-logger")).default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;