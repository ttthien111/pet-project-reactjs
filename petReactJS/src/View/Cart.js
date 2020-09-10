import React, { useState } from "react";
import { MDBIcon, MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn, MDBTableFoot, MDBContainer, MDBCardImage } from "mdbreact";

export default function Cart() {

    const data2 = JSON.parse(localStorage.getItem('myBillDetail')) || []

    const columns2 = [
        {
            label: '',
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
    const [Columns, setColumns] = useState(data2);
    const [Data, setData] = useState(columns2)
    let TotalBill = 0;
    function Purchase() {
        localStorage.removeItem('myBillDetail');
        alert(`Đơn hàng đã được tiếp nhận\nNhấp OK để quay lại trang sản phẩm`);
        setTimeout(() => window.location.replace('http://localhost:3000/products'), 1000);
    }
    data2.map(row => {
        let category = row.pCategory === 1 ? 'Thực phẩm' : row.pCategory === 2 ? 'Đồ chơi' : 'Quần áo';
        let imgURL = process.env.PUBLIC_URL + "/images/" + row.pImage;
        TotalBill += row.numberOrder * row.pPrice;
        return rows.push(
            {
                'img': <img src={imgURL} style={{ width: '100px', height: '100px' }} alt="" className="img-fluid z-depth-0" />,
                'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{row.pName}</strong></h5>, <p key={new
                    Date().getDate} className="text-muted">{row.pName}</p>],
                'category': category,
                'price': `${row.pPrice}`,
                'qty':
                    <MDBInput type="number" value={row.numberOrder} default={row.numberOrder} className="form-control" style={{ width: "100px" }} />,
                'amount': <strong>{`${row.numberOrder * row.pPrice}`}</strong>,
                'buttonRefresh':
                    <>
                        <i className="fas fa-camera fa-xs"></i>
                        <MDBTooltip placement="top">
                            <MDBBtn color="primary" size="m">
                                ?
                            </MDBBtn>
                            <div>Cập nhật số lượng</div>
                        </MDBTooltip>
                        <MDBTooltip placement="top">
                            <MDBBtn color="primary" size="m">
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

    if(data2.length!==0)
        return (
            <MDBContainer>
                <MDBRow className="my-2" center>
                    <MDBCard className="w-100">
                        <MDBCardBody>
                            <MDBTable className="product-table">
                                <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns2} />
                                <MDBTableBody rows={rows} />
                                <MDBTableBody rows={rowsTemp} />
                            </MDBTable>
                        </MDBCardBody>
                    </MDBCard>
                </MDBRow>
            </MDBContainer>
        )
    else
        return (
            <MDBContainer>
                <img style={{width:'100%',height:'600px'}} class="center" src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png"/>
            </MDBContainer>
        )
}