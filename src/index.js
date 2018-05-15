import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure_store';
import './index.css';
import MainPanel from './components/main_panel';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <MainPanel />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
