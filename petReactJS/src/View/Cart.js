import React, { useState, useEffect, useRef } from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn, MDBContainer } from "mdbreact";
import { AlertList } from 'react-bs-notifier';
import * as constant from '../Helper/constant'
export default function Cart() {
    const [LoginInformation, setLoginInformation] = useState(localStorage.getItem(constant.LOGIN_INFORMATION));
    const [position, setPosition] = React.useState("bottom-right");
    const [alerts, setAlerts] = React.useState([]);
    const [alertTimeout, setAlertTimeout] = React.useState(1);
    const [newMessage, setNewMessage] = React.useState(
        null
    );
    const didMountRef = useRef(false);
    const data = JSON.parse(localStorage.getItem(constant.BILL_DETAIL)) || []
    const [InputNumberUpdate, setInputNumberUpdate] = useState(data);
    function getInputValue(value, index) {
        console.log('value' + value);
        console.log('index' + index);
        let newArr = [...InputNumberUpdate];
        console.log(newArr);
        newArr[index].numberOrder = value;
        setInputNumberUpdate(newArr);
    }
    function DeleteCurentItem(index) {
        data.splice(index, 1);
        console.log(data);
        localStorage.setItem(constant.BILL_DETAIL, JSON.stringify(data));
        window.location.reload();
    }
    function Purchase() {
        if (LoginInformation !== null) {
            setNewMessage('Đơn hàng đã được tiếp nhận');
            generate('success');
            setTimeout(() => localStorage.removeItem(constant.BILL_DETAIL), 500);
            setTimeout(() => window.location.replace('http://localhost:3000/products'), 2000);
        }
        else{
            setNewMessage('Vui lòng đăng nhập để mua hàng');
            generate('danger');
        }
        
    }
    useEffect(() => {
        if(didMountRef.current)
            Purchase();
        else
            didMountRef.current = true;
    }, [newMessage]);
    const generate = React.useCallback(
        type => {
            setAlerts(alerts => [
                ...alerts,
                {
                    id: new Date().getTime(),
                    type: type,
                    message: newMessage,
                    headline: `Thông báo!`
                }
            ]);
        },
        [newMessage]
    );
    const onDismissed = React.useCallback(alert => {
        setAlerts(alerts => {
            const idx = alerts.indexOf(alert);
            if (idx < 0) return alerts;
            return [...alerts.slice(0, idx), ...alerts.slice(idx + 1)];
        });
    }, []);
    const column = [
        {
            label: <strong>Hình ảnh</strong>,
            field: 'img',
        },
        {
            label: <strong>Tên sản phẩm</strong>,
            field: 'product'
        },
        {
            label: <strong>Loại</strong>,
            field: 'category'
        },
        {
            label: <strong>Đơn giá (VNĐ)</strong>,
            field: 'price'
        },
        {
            label: <strong>Số lượng</strong>,
            field: 'qty'
        },
        {
            label: <strong>Tổng</strong>,
            field: 'amount'
        },
        {
            label: '',
            field: 'button'
        }
    ]
    const rows = [];
    const [Columns, setColumns] = useState(data);
    const [Data, setData] = useState(column);
    let TotalBill = 0;


    data.map((row, index) => {
        let category = row.pCategory === 1 ? 'Thực phẩm' : row.pCategory === 2 ? 'Đồ chơi' : 'Quần áo';
        let imgURL = process.env.PUBLIC_URL + "/images/" + row.pImage;
        TotalBill += InputNumberUpdate[index].numberOrder * row.pPrice;
        console.log(InputNumberUpdate[index].numberOrder);
        return rows.push(
            {
                'img': <img src={imgURL} style={{ width: '100px', height: '100px' }} alt="" className="img-fluid z-depth-0" />,
                'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{row.pName}</strong></h5>, <p key={new
                    Date().getDate} className="text-muted">{row.pName}</p>],
                'category': category,
                'price': `${row.pPrice}`,
                'qty':
                    <>
                        {/* <input min={'1'} type="number" style={{ textAlign: 'center', width: '100px' }} className="quantity" name="quantity" value={InputNumberUpdate} onChange={(e) => setNumberOfProduct(parseInt(e.target.value))} /> */}
                        <input min={'1'} type="number" placeholder={row.numberOrder} value={InputNumberUpdate.numberOrder} style={{ width: "100px" }} onChange={(e) => getInputValue(parseInt(e.target.value), index)} />
                    </>,
                'amount':
                    <>
                        {/* <strong>{`${row.numberOrder * row.pPrice}`}</strong> */}
                        <strong>{InputNumberUpdate[index].numberOrder * row.pPrice}</strong>

                    </>,
                'buttonRefresh':
                    <>
                        <i className="fas fa-camera fa-xs"></i>
                        <MDBTooltip placement="top">
                            <MDBBtn onClick={() => DeleteCurentItem(index)} color="primary" size="m">
                                X
                        </MDBBtn>
                            <div>Xóa sản phẩm</div>
                        </MDBTooltip>
                    </>
            }
        )
    });

    const rowsTemp = [];
    rowsTemp.push({
        'img': <div></div>,
        'product': <div></div>,
        'category': <div></div>,
        'price': <div></div>,
        'qty': <strong>Tổng</strong>,
        'amount': <strong style={{ color: 'red' }}>{TotalBill}</strong>,
        'button':
            <MDBTooltip placement="top">
                <MDBBtn onClick={Purchase} color="primary" size="m">
                    Mua ngay
                        </MDBBtn>
                <div>Hoàn tất đơn đặt</div>
            </MDBTooltip>
    })

    if (data.length !== 0)
        return (
            <MDBContainer>
                <MDBRow className="my-2" center>
                    <MDBCard className="w-100">
                        <MDBCardBody>
                            <MDBTable className="product-table">
                                <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={column} />
                                <MDBTableBody rows={rows} />
                                <MDBTableBody rows={rowsTemp} />
                            </MDBTable>
                        </MDBCardBody>
                    </MDBCard>
                </MDBRow>
                <AlertList
                    position={position}
                    alerts={alerts}
                    timeout={alertTimeout}
                    dismissTitle="Begone!"
                    onDismiss={onDismissed}
                />
            </MDBContainer>
        )
    else
        return (
            <MDBContainer>
                <img style={{ width: '100%', height: '600px' }} class="center" src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png" />
            </MDBContainer>
        )
}