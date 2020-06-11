import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';

import TodoApp from './component/TodoApp';

localStorage.setItem('isLoggedIn',"false");
ReactDOM.render(

    <App>

    </App>,
  document.getElementById('root')
);
