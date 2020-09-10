import React, { useState, useRef, useEffect } from 'react'
import Axios from 'axios'
import * as constant from '../Helper/constant'
export default function Login() {
    const [UserName, setUserName] = useState('ABC');
    const [Password, setPassword] = useState('123');

    function alertLoginStatus(res) {
        if(res!==undefined){
            alert('Successful');
        }
        else{
            alert('Failed');
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
        <div>
            <div>
                <p id='test2'></p>
                <label title="Login">
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <br />
                    <input
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                </label>
                <button label="Submit" onClick={Login} />
            </div>
        </div>
    );
}