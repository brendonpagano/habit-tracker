// Node Modules
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

// Inner Modules
import createRootReducer from './root_reducer';


// Add support to Redux Dev Tools by changing the compose function if present.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Get the history object, to be used across the application.
const history = createBrowserHistory();


// Create application middlewares.
const middlewares = [
  routerMiddleware(history)
];


// Create the redux store.
const configureStore = (preloadedState) => createStore(
  createRootReducer(history),
  preloadedState,
  composeEnhancers(applyMiddleware(...middlewares))
);


export default configureStore;
export { history };
