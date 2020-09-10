import React, { useState, useEffect } from 'react'
import * as commonFunc from '../Helper/commonFunction'
import Item from '../Component/ItemProduct'
export default function FoodData() {

    const [FoodData, setFoodData] = useState();
    useEffect(() => {
        commonFunc.getAPI('foodProducts', FoodData, setFoodData);
    }, [])

    let arr = [];
    commonFunc.objectArrayToArray(FoodData, arr);
    if (FoodData !== undefined) {
        console.log(arr[0]);
        return (
            <>
                <ul>
                    {arr.map(arr => (
                        <li>
                            <li>
                                {arr.foodId}
                            </li>
                            <ul>
                                {arr.productId}
                                {arr.foodExpiredDate}
                                {arr.foodAmount}
                                {arr.product}
                            </ul>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
    else {
        return (
            <div>Loading</div>
        )
    }
}