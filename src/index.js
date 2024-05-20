// code - core
import React from 'react';
import ReactDOM from 'react-dom/client';
// import Heading from './Heading';
import Food from './Food';

// dev
import reportWebVitals from './reportWebVitals';
import { Button } from './ui/Button';
import { Counter } from './ui/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
const foods = [
  { id: 1, image: "images/pizza.jpg", name: "Pizza", price:"99", ingredience:"Meat, cheas, cherry, onion"},
  { id: 2, image: "images/burger.jpg", name: "Burger", price:"56", ingredience:"Meat, cheas, cherry, onion"},
  { id: 3, image: "images/salat.jpg", name: "Salat", price:"34", ingredience:"cherry, onion"}
];
root.render(
  <React.StrictMode>
    <Button 
      text="sort"
      backgroundColor="#333"
      color="#fff" />
    <Counter 
      text="inc"
      backgroundColor="#444"
      color="#fff" />
  </React.StrictMode>
);
reportWebVitals();