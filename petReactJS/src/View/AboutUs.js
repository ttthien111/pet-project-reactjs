import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer, MDBCardTitle } from "mdbreact";

export default function AboutUs() {
    
    return (
        <MDBContainer>
            
            <section className="my-5">
            <MDBCardTitle>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Thông tin liên hệ
                </h2>
                <p className="text-center w-responsive mx-auto pb-5">
                    KMS Technology là một công ty phần mềm Việt Nam. Thành lập năm 2009, công ty chuyên cung cấp các dịch vụ phát triển sản phẩm phần mềm, tư vấn triển khai các giải pháp công nghệ và khởi nghiệp & đầu tư.
                </p>
            </MDBCardTitle>
                <MDBRow>
                    <MDBCol lg="5" className="lg-0 mb-4">
                        <MDBCard>
                            <MDBCardBody>
                                <div className="form-header blue accent-1">
                                    <h3 className="mt-2">
                                        <MDBIcon icon="envelope" /> Gửi yêu cầu:
                </h3>
                                </div>
                                <p className="dark-grey-text">
                                    Mọi thắc mắc sẽ được phản hồi sớm nhất.
              </p>
                                <div className="md-form">
                                    <MDBInput
                                        icon="user"
                                        label="Họ tên"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-name"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="envelope"
                                        label="Địa chỉ Email"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-email"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="tag"
                                        label="Chủ đề"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-subject"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="pencil-alt"
                                        label="Nội dung"
                                        iconClass="grey-text"
                                        type="textarea"
                                        id="form-text"
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="light-blue">Gửi</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="7">
                        <div
                            id="map-container"
                            className="rounded z-depth-1-half map-container"
                            style={{ height: "400px" }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.9952922018914!2d106.66560020637775!3d10.806958168414997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752924c0f77dbf%3A0xd6000a3265ef83af!2sKMS%20Technology%20Tan%20Vien!5e0!3m2!1sen!2s!4v1599670567788!5m2!1sen!2s"
                                title="This is a unique title"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                            />
                        </div>
                        <br />
                        
                    </MDBCol>
                </MDBRow>
            </section>
        </MDBContainer>
    );
}
