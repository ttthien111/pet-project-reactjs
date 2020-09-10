import React, { useEffect } from 'react'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Food from './Data/FoodProducts';
import Product from './View/Products';
import AboutUs from './View/AboutUs';
import Cart from './View/Cart';
import Dashboard from './View/Dashboard';
import ProductDetail from './Data/ProductDetail'
import 'bootstrap/dist/css/bootstrap.css';

export default function Header() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light" color="black" fixed="top" dark expand="md">
        <a className="navbar-brand" href="#">PETSHOP</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Trang chủ <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/products" className="nav-link" id="navbarDropdown" role="button">
                Sản phẩm
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/detail" className="nav-link">Detail</Link>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/cart">Giỏ hàng</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/aboutus">Về chúng tôi</a>
            </li>

          </ul>
        </div>
      </nav>
      <Switch>
        {/* <Route exact path='/detail/'>
           <FoodDetail></FoodDetail>
        </Route> */}
        <Route exact path='/'>
          <Dashboard></Dashboard>
        </Route>
        <Route exact path='/aboutUs'>
          <AboutUs></AboutUs>
        </Route>
        <Route exact path='/cart'>
          <Cart></Cart>
        </Route>
        <Route exact path='/products'>
          <Product></Product>
        </Route>
        <Route path='/products/:category/:productName'>
          <ProductDetail></ProductDetail>
        </Route>
      </Switch>
    </Router>
  )
}