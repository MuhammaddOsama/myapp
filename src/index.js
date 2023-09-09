import React, { component } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
//import Appp from './Appp';
//import State from './Component/State'
//import Form from './Component/Form'
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Bootstrap from './fcomponent.js/Bootstrap';
//import Sementic from './fcomponent.js/Sementic'
import Material from './fcomponent.js/Material';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <  Material />,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
