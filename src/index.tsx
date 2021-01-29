import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Global.css'
import {Provider} from 'react-redux'
import store from './store'
import Routes from './routes/Routes'

ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
  document.getElementById('root')
);

