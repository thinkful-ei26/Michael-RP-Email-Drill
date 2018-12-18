import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Email from './components/email';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Email />
    </Provider>,
    document.getElementById('root')
);
