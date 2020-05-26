import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import '@ui5/webcomponents-icons/dist/json-imports/Icons.js';
import { ThemeProvider } from '@ui5/webcomponents-react';
//css
import './index.css';
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//component
import App from './forecast/component/App';
import store from './forecast/store/store';
import * as serviceWorker from './serviceWorker';

const history = createHistory();

const app = (
   <Provider store={store}>
       <Router history={history}>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
       </Router>

   </Provider>

);


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();