import React, { useState, useEffect } from 'react'
import * as constant from '../Helper/constant'
import { useParams } from 'react-router-dom';
import inputNumber from '../Component/inputNumber'
import { MDBContainer } from 'mdbreact';
import { AlertList } from 'react-bs-notifier';
export default function ProductDetail(props) {

  //props get from Data/ProductDetail
  //props contain number of fields which was declared as below
  // Id: props[0],
  //   Name: props[1],
  //     Category: props[2],
  //       Image: props[3],
  //         Price: props[4],
  //           Discount: props[5]
  const [NumberOfProduct, setNumberOfProduct] = useState(1);
  const [position, setPosition] = React.useState("bottom-right");
  const [alerts, setAlerts] = React.useState([]);
  const [alertTimeout, setAlertTimeout] = React.useState(0.5);
  const [newMessage, setNewMessage] = React.useState(
    "Đã được thêm vào giỏ hàng"
  );

  const generate = React.useCallback(
    type => {
      setAlerts(alerts => [
        ...alerts,
        {
          id: new Date().getTime(),
          type: type,
          headline: `Yay!!!`,
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

  //SumOfProduct = price of product * quantity
  let SumOfProduct = NumberOfProduct * props[4];
  //when user click add to cart
  function addToCart() {
    //get product which were chosen or return empty array
    let data = JSON.parse(localStorage.getItem('myBillDetail')) || [];
    //flag to check item was already in cart 
    let isDup = false;
    //get product information was sent by productDetailData
    const productData = {
      'pId': props[0],
      'pName': props[1],
      'pCategory': props[2],
      'pImage': props[3],
      'pPrice': props[4],
      'pDiscount': props[5],
      'numberOrder': NumberOfProduct,
      'total': SumOfProduct
    }
    //check duplicate product
    for (let index = 0; index < data.length; index++) {
      //if duplicate then accumulate that item into data array
      //trigger flag and break loop
      if (productData.pId == data[index].pId && productData.pCategory == data[index].pCategory) {
        data[index].numberOrder += productData.numberOrder;
        data[index].total += productData.total;
        isDup = true;
        break;
      }
    }
    //if not duplicate, then push new product to array
    if (!isDup) {
      data.push(productData)
    }
    //set new storage
    localStorage.setItem('myBillDetail', JSON.stringify(data));

    //alert
    generate("success");
  }

  //prevent negative number from user input
  function checkMin(num) {
    if (num < 1) {
      setNumberOfProduct(1);
    }
    else {
      setNumberOfProduct(NumberOfProduct - 1);
    }
  }

  return (
    <MDBContainer>
      <div class="card mt-5 hoverable">
        <div class="row mt-5">
          <div class="col-lg-6">
            {/*Carousel Wrapper*/}
            <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">

              {/*Slides*/}
              <div class="carousel-item active">
                <img src={constant.pImage + props[3]} alt="Second slide" class="img-fluid" />
              </div>
              {/*/.Slides*/}


            </div>
            {/*/.Carousel Wrapper*/}
          </div>
          <div class="col-lg-5 mr-3 text-center text-md-left">
            <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
              <strong>{props[1]}</strong>
            </h2>
            <span class="badge badge-danger product mb-4 ml-xl-0 ml-4" style={{ marginRight: '10px' }}>bestseller</span>
            <span class="badge badge-danger product mb-4 ml-xl-0 ml-4">{props[5] > 0 ? <>{`-${props[5] * 100}%`} </> : <></>}</span>
            <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
              <span class="red-text font-weight-bold">
                <strong>{props[4]}</strong>
              </span>
              {props[5] > 0 ?
                (
                  <span class="grey-text">
                    <small>
                      <s>
                        {(1 + props[5]) * props[4]}
                      </s>
                    </small>
                  </span>
                ) :
                (
                  <span class="grey-text">
                    <small>
                      <s>
                      </s>
                    </small>
                  </span>
                )}
            </h3>

            {/*Accordion wrapper*/}
            <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

              {/* Accordion card */}
              <div class="card">

                {/* Card header */}
                <div class="card-header" role="tab" id="headingOne1">
                  <p data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                    <h5 class="mb-0">
                      Mô tả
                      <i class="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </p>
                </div>
                <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                  <div class="card-body">
                    {props[6]}
                  </div>
                </div>
              </div>
              <br></br>
              <div style={{ width: '100%', textAlign: "center" }} className="def-number-input number-input">
                <div>
                  <button onClick={() => checkMin(NumberOfProduct - 1)} className="minus">-</button>
                  <input min={'1'} type="number" style={{ textAlign: 'center', width: '100px' }} className="quantity" name="quantity" value={NumberOfProduct} onChange={(e) => setNumberOfProduct(parseInt(e.target.value))} />
                  <button onClick={() => setNumberOfProduct(NumberOfProduct + 1)} className="plus">+</button>
                </div>
                <br></br>
                <div>
                  <strong>Tổng: <p style={{ color: 'red', display: "inline-block" }}>{NumberOfProduct * props[4]}</p></strong>
                </div>
              </div>
              <section class="color">
                <div class="mt-5">

                  <div class="row mt-3 mb-4">
                    <div class="col-md-12 text-center text-md-left text-md-right">
                      <button class="btn btn-primary btn-rounded waves-effect waves-light" onClick={addToCart}>
                        <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
                    </div>
                  </div>
                </div>
              </section>
              {/* /.Add to Cart */}
            </div>
          </div>
        </div>
      </div>
      <>
        <AlertList
          position={position}
          alerts={alerts}
          timeout={alertTimeout}
          dismissTitle="Begone!"
          onDismiss={onDismissed}
        />
      </>
    </MDBContainer>
  )
}