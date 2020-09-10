import React, {useState, useEffect} from 'react';
import GetCategories from './Data/Categories'
import './App.css';
import GetFood from './Data/FoodProducts';
import Products from './View/Products';
import Login from './Component/Login';
import Register from './Component/Register'
import Header from './Header'
import Footer from './ViewShare/Footer'
import Card from './Component/ItemProduct'
import FoodData from './Data/FoodProducts';
function App() {

  return (
    // <Register></Register>
    <>
    <Header></Header>
    <Footer></Footer>
    {/* <div className="App">
      <Login></Login>
      <GetCategories></GetCategories>
      <GetFood></GetFood>
      <Products></Products>
      <div>
        <p id='test'></p>
      </div>
    </div> */}
    </>
  );
}

export default App;
