import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom' 
import * as commonFunc from '../Helper/commonFunction'
import ProductDetail from '../View/ProductDetail';

export default function GetProductDetail() {
    const {category, productName} = useParams();
    console.log('category:' + category);
    console.log('product name:' + productName);
    const [ProductDetailData, setProductDetailData] = useState(null);
    useEffect(() => {
        commonFunc.getAPI(`products/${category}/${productName}`, ProductDetailData, setProductDetailData);
    }, []);
    let arr = [];
    commonFunc.objectArrayToArray(ProductDetailData, arr);
    console.log(arr);

    if (ProductDetailData !== undefined)
        return (
            <ProductDetail {...arr}></ProductDetail>
        )
    else {
        return (
            <div>Loading...</div>
        )
    }
}