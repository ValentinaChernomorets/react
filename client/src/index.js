// code - core
import React from 'react';
import ReactDOM from 'react-dom/client';
// import Heading from './Heading';
// import Food from './Food';

// dev
import reportWebVitals from './reportWebVitals';
import { Counter } from './ui/Counter';
import { App } from './ui/App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Counter 
      text="inc"
      backgroundColor="#444"
      color="#fff" />
    <App />
  </React.StrictMode>
);

//dev
reportWebVitals();