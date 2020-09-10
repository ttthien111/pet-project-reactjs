import React, { useEffect, useState } from 'react'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Product from '../View/Products';
import AboutUs from '../View/AboutUs';
import Cart from '../View/Cart';
import Dashboard from '../View/Dashboard';
import ProductDetail from '../Data/ProductDetail'
import Login from '../View/Login'
import 'bootstrap/dist/css/bootstrap.css';
import { MDBBtn } from 'mdbreact';
import * as constant from '../Helper/constant'
import { AlertList, Alert, AlertContainer } from 'react-bs-notifier';
export default function Header() {
  const [LoginInformation, setLoginInformation] = useState(localStorage.getItem(constant.LOGIN_INFORMATION));
  const [position, setPosition] = React.useState("bottom-right");
  const [alerts, setAlerts] = React.useState([]);
  const [alertTimeout, setAlertTimeout] = React.useState(1);
  const [newMessage, setNewMessage] = React.useState(
    'Đăng xuất thành công'
  );
  function signOut() {
    generate();
    localStorage.removeItem(constant.LOGIN_INFORMATION);
    setLoginInformation(null);
  }
  function checkLogin() {
    console.log();
    return (LoginInformation == null ? (<Link to="/login">
      <MDBBtn color={'info'}>Đăng nhập</MDBBtn>
    </Link>) : <> <strong style={{ marginRight: '5px' }}>Chào {JSON.parse(LoginInformation).data.accountUserName}</strong> <MDBBtn color={'secondary'} onClick={() => signOut()}>Đăng xuất</MDBBtn></>)
  }



  const generate = React.useCallback(
    type => {
      setAlerts(alerts => [
        ...alerts,
        {
          id: new Date().getTime(),
          type: type,
          headline: `Thông báo`,
          message: newMessage
        }
      ]);
    },
    [newMessage]
  );

  const onDismissed = React.useCallback(alert => {
    setAlerts(alerts => {
      const idx = alerts.indexOf(alert);
      if (idx < 0) return alerts;
      return [...alerts.slice(0, idx), ...alerts.slice(idx + 1)];
    });
  }, []);
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
            <li className="nav-item">
              <a className="nav-link" href="/cart">Giỏ hàng</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">Về chúng tôi</a>
            </li>
          </ul>
        </div>
        {checkLogin()}
      </nav>
      <Switch>
        <Route exact path='/'>
          <Dashboard></Dashboard>
        </Route>
        <Route exact path='/aboutUs'>
          <AboutUs></AboutUs>
        </Route>
        <Route exact path='/cart'>
          <Cart></Cart>
        </Route>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/products'>
          <Product></Product>
        </Route>
        <Route path='/products/:category/:productName'>
          <ProductDetail></ProductDetail>
        </Route>
      </Switch>
      <AlertList
                className={`btn btn-info`}
                position={position}
                alerts={alerts}
                timeout={alertTimeout}
                dismissTitle="Begone!"
                onDismiss={onDismissed}
            />
    </Router>
  )
}