// code - core
import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './Heading';
import Food from './Food';

// dev
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const foods = [
  { id: 1, image: "images/pizza.jpg", name: "Pizza", price:"99", ingredience:"Meat, cheas, cherry, onion"},
  { id: 2, image: "images/burger.jpg", name: "Burger", price:"56", ingredience:"Meat, cheas, cherry, onion"},
  { id: 3, image: "images/salat.jpg", name: "Salat", price:"34", ingredience:"cherry, onion"}
];
root.render(
  <React.StrictMode>
   <Heading text="Restaurant App" />
   {foods.map(food => (
      <Food key={food.id} {...food} />
    ))}
  </React.StrictMode>
);
reportWebVitals();

// HW1: create a component name Food: which can render a food item in menu
//    -image
//    -name
//    -price
//    -ingredients

// NOTE: how to render 3 food items?
// NOTE: what if while rendering we will send an entire food object