import React from 'react'
import Axios from 'axios'
import * as constant from './constant'

//#region 
//get API
 export async function getAPI(tail, data, setdata) {
     await Axios.get(constant.URL + tail)
        .then((res) => {
            setdata(res.data);
        })
        .catch(e => console.log(e))
    
}

//post API
export function postAPI(tail, object, data, setResponse){
    Axios.post(constant.URL+tail,object, {
        headers: {'content-type': 'application/json; charset=utf-8'}
    })
         .then((res)=> {
             data = res;
             setResponse(res);
         })
         .catch(e => console.log(e));
}
//#endregion


//convert object to array 
export function objectArrayToArray(obj, arr) {
    for (var item in obj) {
        arr.push(obj[item]);
    }
}
