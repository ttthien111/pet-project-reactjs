import React, { useState, useEffect } from 'react'
import * as constant from '../Helper/constant'
import { useParams } from 'react-router-dom';
import inputNumber from '../Component/inputNumber'
import { MDBContainer } from 'mdbreact';
export default function ProductDetail(props) {
  console.log(props);


  const [NumberOfProduct, setNumberOfProduct] = useState(1);

  let SumOfProduct = NumberOfProduct * props[4];
  function showData() {
    let data = JSON.parse(localStorage.getItem('myBillDetail')) || [];
    let isDup = false;
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

    for (let index = 0; index < data.length; index++) {
      if (productData.pId == data[index].pId && productData.pCategory == data[index].pCategory) {
        data[index].numberOrder += productData.numberOrder;
        data[index].total += productData.total;
        isDup = true;
        break;
      }
    }
    if (!isDup) {
      data.push(productData)
    }
    localStorage.setItem('myBillDetail', JSON.stringify(data));
  }
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

              {/*Thumbnails*/}
              <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
              {/*/.Thumbnails*/}

            </div>
            {/*/.Carousel Wrapper*/}
          </div>
          <div class="col-lg-5 mr-3 text-center text-md-left">
            <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
              <strong>{props[1]}</strong>
            </h2>
            <span class="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span>
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
                  <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                    <h5 class="mb-0">
                      Description
                      <i class="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>
                <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                  <div class="card-body">
                    {props[6]}
                  </div>
                </div>
              </div>
              <br></br>
              <div className="def-number-input number-input">
                <div>
                  <button onClick={() => checkMin(NumberOfProduct - 1)} className="minus">-</button>
                  <input min={'1'} type="number" style={{ textAlign: 'center' }} className="quantity" name="quantity" value={NumberOfProduct} onChange={(e) => setNumberOfProduct(parseInt(e.target.value))} />
                  <button onClick={() => setNumberOfProduct(NumberOfProduct + 1)} className="plus">+</button>
                </div>
                <div>
                  <div>Total: {NumberOfProduct * props[4]}</div>
                </div>
              </div>
              <section class="color">
                <div class="mt-5">
                  <p class="grey-text">Choose your color</p>
                  <div class="row text-center text-md-left">

                    <div class="col-md-4 col-12 ">
                      {/*Radio group*/}
                      <div class="form-group">
                        <input class="form-check-input" name="group100" type="radio" id="radio100" checked="checked" />
                        <label for="radio100" class="form-check-label dark-grey-text">Blue</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      {/*Radio group*/}
                      <div class="form-group">
                        <input class="form-check-input" name="group100" type="radio" id="radio101" />
                        <label for="radio101" class="form-check-label dark-grey-text">Orange</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      {/*Radio group*/}
                      <div class="form-group">
                        <input class="form-check-input" name="group100" type="radio" id="radio102" />
                        <label for="radio102" class="form-check-label dark-grey-text">Red</label>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-3 mb-4">
                    <div class="col-md-12 text-center text-md-left text-md-right">
                      <button class="btn btn-primary btn-rounded waves-effect waves-light" onClick={showData}>
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
    </MDBContainer>
  )
}