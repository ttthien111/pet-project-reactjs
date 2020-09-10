import React, {useState, useEffect} from 'react';
import * as commonFunc from '../Helper/commonFunction'

export default function GetCategories(){
    const [CategoryData, setCategoryData] = useState();

    useEffect(() => {      
        commonFunc.getAPI('categories', CategoryData, setCategoryData);
    },[]);

    let arr = [];
    arr = commonFunc.objectArrayToArray(CategoryData, arr);
    console.log(arr);
    //let temp = commonFunc.mapDataObjectToArray(arr);

    if(CategoryData!==undefined){
        return(
            commonFunc.mapDataObjectToArray(arr)
        )
    }
    else{
        return(<div>Loading</div>)
    }
}