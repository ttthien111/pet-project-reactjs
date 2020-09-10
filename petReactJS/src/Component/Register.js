// import React, { useState, useRef, useEffect } from 'react'
// import Axios from 'axios'
// import * as constant from '../Helper/constant'
// export default function Register() {
    
//     //#region 
//     //q: make a object state in useState
//     //q2: make a for loop to show all property to render
//     //q3: check whether q2 show in q3 by looking their change
//     //q4: register
//     //#endregion
    
//     const [AccountId, setAccountId] = useState('ABC');
//     const [AccountUserName, setAccountUserName] = useState('ABC');
//     const [AccountPassword, setAccountPassword] = useState('ABC');
//     const [IsActive, setIsActive] = useState('123');
//     const [AccountRoleId, setAccountRoleId] = useState('123');
//     const [Jwtoken, setJwtoken] = useState('123');
//     const [IsLoginExternal, setIsLoginExternal] = useState('123');
//     const [AccountRole, setAccountRole] = useState('123');
//     const [UserProfile, setUserProfile] = useState('123');


//     function alertLoginStatus(res) {
//         if(res!==undefined){
//             alert('Successful');
//         }
//         else{
//             alert('Failed');
//         }
//     }

//     async function Register() {
//         var userInfo = JSON.stringify({ UserName, Password });
//         console.log(userInfo);
//         const response = await Axios.post(constant.URL + 'LoginAuthentication/Authenticate', userInfo, {
//             headers: { 'content-type': 'application/json; charset=utf-8' }
//         })
//             .then((res) => {
//                 console.log(res);
//                 return res;
//             })
//             .catch(e => console.log(e));
//         console.log(response);
//         alertLoginStatus(response);
//     }
//     useEffect(() => {
//         document.getElementById('test2').innerHTML = `${UserInfo}`
//     }, [UserInfo]);

//     return (
//         <div>
//             <div>
//                 <p id='test2'></p>
//                 <label title="Login">
//                     <input
//                         onChange={(e) => setUserInfo(e.target.value)}
//                     />
//                     <br/>
//                     <input
//                         onChange={(e) => setUserName(e.target.value)}
//                     />
//                     <br />
//                     <input
//                         type='password'
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <br />
//                 </label>
//                 <button label="Submit" onClick={Login} />
//             </div>
//         </div>
//     );
// }