// Node Modules
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'


// Inner Modules
import configureStore, { history } from './redux/store';


// Create the redux store.
const reduxStore = configureStore();


const App = () => (
  <Provider store={reduxStore}>
    <ConnectedRouter history={history}>
    </ConnectedRouter>
  </Provider>
);


export default App;
