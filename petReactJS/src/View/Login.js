import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCardBody } from 'mdbreact';
import Axios from 'axios'
import * as constant from '../Helper/constant'
export default function Login() {
    const [UserName, setUserName] = useState('ABC');
    const [Password, setPassword] = useState('123');

    function alertLoginStatus(res) {
        if (res !== undefined) {
            alert('Đăng nhập thành công');
            delete(res.data.accountPassword);
            localStorage.setItem(constant.LOGIN_INFORMATION, JSON.stringify(res));
            console.log(localStorage.getItem(constant.LOGIN_INFORMATION));
            window.location.replace('http://localhost:3000/');
        }
        else {
            alert('Vui lòng đăng nhập lại');
            window.location.reload();
        }
    }
    async function Login() {
        var userInfo = JSON.stringify({ UserName, Password });
        console.log(userInfo);
        const response = await Axios.post(constant.URL + 'LoginAuthentication/Authenticate', userInfo, {
            headers: { 'content-type': 'application/json; charset=utf-8' }
        })
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch(e => console.log(e));
        console.log(response);
        alertLoginStatus(response);

    }
    return (
        <MDBContainer>
            <MDBRow>
                    <MDBCol >
                        <div style={{textAlign:'center'}}>
                            <form className='w-50' style={{display:"inline-block"}}>
                                <p className="h5 text-center mb-4">Sign in</p>
                                <div className="grey-text">
                                    <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                        onChange={(e) => setUserName(e.target.value)} success="right" />
                                    <MDBInput onChange={(e) => setPassword(e.target.value)} label="Type your password" icon="lock" group type="password" validate />
                                </div>
                                <div className="text-center">
                                    <MDBBtn onClick={Login} color='info'>Sign in</MDBBtn>
                                </div>
                            </form>
                        </div>
                    </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};
