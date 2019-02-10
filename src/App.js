// Node Modules
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

// Inner Modules
import configureStore, { history } from './redux/store';

// Components
import ApplicationFrame from './components/ApplicationFrame';
import OfflineShield from './components/OfflineShield';
import AppRouter from './routes';


// Create the redux store.
const reduxStore = configureStore();


const App = () => (
  <Provider store={reduxStore}>
    <ConnectedRouter history={history}>
      <ApplicationFrame>
        <OfflineShield>
          <AppRouter />
        </OfflineShield>
      </ApplicationFrame>
    </ConnectedRouter>
  </Provider>
);


export default App;
