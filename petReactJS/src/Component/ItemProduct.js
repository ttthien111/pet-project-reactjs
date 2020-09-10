import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const CardExample = (props) => {
    const pImage = process.env.PUBLIC_URL + "/images/" + props.productImage
    const category = props.categoryId === 1 ? 'food' : props.categoryId === 2 ? 'toys' : 'costume';
    const urlAPI = category + '/' + props.slugName;
    return (
        <Router>
            <MDBCol>
                <MDBCard style={{ width: "15rem" }}>
                    <MDBCardImage className="img-fluid" src={pImage} alt={props.productImage} waves />
                    <MDBCardBody>
                        <MDBCardTitle>{props.productName}</MDBCardTitle>
                        <MDBCardText>
                            {props.productDescription}
                        </MDBCardText>
                        <Link to={`/products/${category}/${props.slugName}`} onClick={()=>{window.location.replace(`http://localhost:3000/products/${category}/${props.slugName}`)}}>Xem chi tiết</Link>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </Router>
    )
}

export default CardExample;