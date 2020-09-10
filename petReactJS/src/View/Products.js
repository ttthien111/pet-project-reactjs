import React, { useState, useEffect } from 'react'
import * as commonFunc from '../Helper/commonFunction'
import Item from '../Component/ItemProduct'
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
export default function GetFood() {
    const [ProductData, setProductData] = useState();

    useEffect(() => {
        commonFunc.getAPI('products', ProductData, setProductData);
    }, [])

    let arr = [];
    commonFunc.objectArrayToArray(ProductData, arr);

    //divide product into n column
    function divideRow(arr) {
        const rows = [...Array(Math.ceil(arr.length / 4))]
        const productRows = rows.map((row, index) => arr.slice(index * 4, index * 4 + 4));
        return productRows.map((row, index) => (
                <>
                <div key={index}>
                    <MDBRow key={index}>
                        {row.map(product =>
                            <MDBCol  key={product} className="col-md-3">
                                <Item {...product}></Item>
                            </MDBCol>)}
                
                    </MDBRow>
                </div>
                <br></br>
                </>
        ))
    }


    if (ProductData !== undefined) {
        console.log(arr);
        return (
            <MDBContainer >
                {divideRow(arr)}
            </MDBContainer>
        )
    }
    else {
        return (
            <div>Loading</div>
        )
    }
}