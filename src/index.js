import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import TodoApp from './TodoApp';

localStorage.setItem('isLoggedIn',"false");
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
