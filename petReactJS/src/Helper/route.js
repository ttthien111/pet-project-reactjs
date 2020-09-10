import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Food from '../Data/FoodProducts';
import Product from '../Data/Products';
import AboutUs from '../View/AboutUs';
import Cart from '../View/Cart';
import ProductDetail from '../View/ProductDetail';
import Dashboard from '../View/Dashboard';
import FoodDetail from '../Data/FoodDetail'
export default function createRoutes(){
    return (
    <Router>
        <Route exact path='/detail/'>
           <FoodDetail></FoodDetail>
        </Route>
        <Route path='/dashBoard'>
          <Dashboard></Dashboard>
        </Route>
        <Route path='/getFood'>
          <Food ></Food>
        </Route>
        <Route path='/getProduct'>
          <Product></Product>
        </Route>
        <Route path='/aboutUs'>
          <AboutUs></AboutUs>
        </Route>
        <Route path='/cart'>
          <Cart></Cart>
        </Route>
    </Router>
    )
}