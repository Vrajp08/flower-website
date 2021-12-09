import React from 'react'
import { Link } from 'react-router-dom'


function FinalProducts(props) {
    return (
        <div>
            <div className="box">
                <span className="discount">{props.discount}</span>
                <div className="image">
                    <img src={props.images} alt="" />
                    <div className="icons">
                        <Link to="/home" className="fas fa-heart"></Link>
                        <Link to="/home" className="cart-btn">add to cart</Link>
                        <Link to="/home" className="fas fa-share"></Link>
                    </div>
                </div>
                <div className="content">
                    <h3>flower pot</h3>
                    <div className="price"> $12.99 <span>$15.99</span> </div>
                </div>
            </div>
        </div>
    )
}

export default FinalProducts
