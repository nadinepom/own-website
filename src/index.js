import React from 'react';
import { render } from 'react-dom'; // <- This is the correct import statement for React version 17
import App from '../App';


const root = document.getElementById('root'); // <- This is the correct method call for React version 17
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);