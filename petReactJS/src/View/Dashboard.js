import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBIcon,
    MDBCardBody,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer
} from 'mdbreact';

export default function DashBoard() {

    const navStyle = { marginTop: '4rem' };
    const overlay = (
        <div
            id='sidenav-overlay'
            style={{ backgroundColor: 'transparent' }}

        />)
    return (
        <div id='minimalistintro'>
            <MDBView src='https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg'>
                <MDBMask className='rgba-black-light' />
                <MDBContainer
                    className='d-flex justify-content-center align-items-center'
                    style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
                >
                    <MDBRow>
                        <MDBCol md='12' className='mb-4 white-text text-center'>
                            <h1 style={{ color: 'white' }} className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                                PETSHOP
                </h1>
                            <hr className='hr-light my-4' />
                            <h5 style={{ color: 'white' }} className='text-uppercase mb-4 white-text '>
                                <strong>JOY & INTEGRITY</strong>
                            </h5>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBView>
            <section className="my-5">
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Why is it so great?
      </h2>
                <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam.
      </p>

                <MDBRow>
                    <MDBCol md="4" className="md-0 mb-5">
                        <MDBRow>
                            <MDBCol lg="2" md="3" size="2">
                                <MDBIcon icon="bullhorn" size="2x" className="blue-text" />
                            </MDBCol>
                            <MDBCol lg="10" md="9" size="10">
                                <h4 className="font-weight-bold">Marketing</h4>
                                <p className="grey-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam.
              </p>
                                <MDBBtn color="primary" size="sm">
                                    Learn more
              </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="4" className="md-0 mb-5">
                        <MDBRow>
                            <MDBCol lg="2" md="3" size="2">
                                <MDBIcon icon="cogs" size="2x" className="pink-text" />
                            </MDBCol>
                            <MDBCol lg="10" md="9" size="10">
                                <h4 className="font-weight-bold">Customization</h4>
                                <p className="grey-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam.
              </p>
                                <MDBBtn color="pink" size="sm">
                                    Learn more
              </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="4" className="md-0 mb-5">
                        <MDBRow>
                            <MDBCol lg="2" md="3" size="2">
                                <MDBIcon icon="tachometer-alt" size="2x" className="purple-text" />
                            </MDBCol>
                            <MDBCol lg="10" md="9" size="10">
                                <h4 className="font-weight-bold">Support</h4>
                                <p className="grey-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam.
              </p>
                                <MDBBtn color="purple" size="sm">
                                    Learn more
              </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </section>
            <section className="text-center my-5">

                <MDBView src='https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg'>
                    <br></br>
                    <h2 style={{ color: 'white' }} className="h1-responsive font-weight-bold my-5">
                        Our best projects
                </h2>

                    <MDBRow className="text-center">
                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                            <MDBView className="overlay rounded z-depth-1" waves>
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                            <MDBCardBody className="pb-0">
                                <h4 style={{ color: 'white' }} className="font-weight-bold my-3">Title of the news</h4>
                                <p style={{ color: 'white' }} className="grey-text">
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                                    necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>

                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                            <MDBView className="overlay rounded z-depth-1" waves>
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                            <MDBCardBody className="pb-0">
                                <h4 style={{ color: 'white' }} className="font-weight-bold my-3">Title of the news</h4>
                                <p style={{ color: 'white' }} className="grey-text">
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                                    necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>

                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                            <MDBView className="overlay rounded z-depth-1" waves>
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                            <MDBCardBody className="pb-0">
                                <h4 style={{ color: 'white' }} className="font-weight-bold my-3">Title of the news</h4>
                                <p style={{ color: 'white' }} className="grey-text">
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                                    necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>

                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBView>
            </section>
        </div>
    );
}
