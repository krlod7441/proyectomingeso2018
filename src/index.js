import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './component/App';
import * as serviceWorker from './serviceWorker';
import Login from './component/login/Login.js';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Login />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
