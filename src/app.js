import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AppRouter from './routers/AppRouter';

import './firebase/firebase';

import HttpsRedirect from 'react-https-redirect';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addDealing, startSetDealings} from './actions/dealings';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();
const jsx = (
  <div>
    <Provider store={store}>
    
      <AppRouter />
     
    </Provider>
  </div>
);

ReactDOM.render(<p> Loading.. </p>, document.getElementById('app'));
store.dispatch(startSetDealings()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
})

