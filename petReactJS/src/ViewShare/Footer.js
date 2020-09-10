
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css"

function Footer() {
  return (
    <div className="main-footer">
       <div className="container">
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">PETSHOP</h5>
            <p>
              Thiên đường mua sắm cho thú cưng.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Trang chủ</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sản phẩm</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Về chúng tôi</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Liên hệ</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://localhost:3000/"> PETSHOP </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
    </div>
  )
}

export default Footer