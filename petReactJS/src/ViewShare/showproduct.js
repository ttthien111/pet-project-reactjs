import Axios from "axios";

const e = React.createElement;

function getAPI(tail, data, setdata) {
    Axios.get(constant.URL + tail)
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

//show DTO
export function mapDataObjectToArray(arr) {
    if (arr !== undefined) {
        {
            arr.map(arr => (
                <li key={arr.categoryId}>
                    {arr.categoryName} {arr.product}
                </li>
            ))
        }
    }
}


function GetFood(){
    const [ProductData, setProductData] = React.useState();

    React.useEffect(() => {
        getAPI('products',ProductData,setProductData);
    },[])
    
    console.log(ProductData);
    let arr = [];
    commonFunc.objectArrayToArray(ProductData, arr);
    console.log(arr);
    if(ProductData!==undefined){
        return(
            <ul>
                {arr.map(arr=>(
                    <li>
                    <li>
                         {arr.productId}
                    </li>
                        <ul>
                         {arr.productName} 
                         {arr.categoryId}
                         {arr.productImage}
                         {arr.productPrice}
                         {arr.productDiscount}
                         {arr.productDescription}
                         {arr.distributorId}
                         {arr.isActivated}
                         {arr.slugName}
                         {arr.initAt}
                         {arr.numberOfPurchases}
                         {arr.category}
                         {arr.distributor}
                    </ul>
                    </li>
                ))}
            </ul>
        )
    }
    else{
        return(
            <div>Loading</div>
        )
    }
}

const domContainer = document.querySelector('#show_product');
ReactDOM.render(e(GetFood), domContainer);