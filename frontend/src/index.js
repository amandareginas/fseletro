import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './components/Routes';
import './styles.css';

ReactDOM.render(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
  document.getElementById('root')
);