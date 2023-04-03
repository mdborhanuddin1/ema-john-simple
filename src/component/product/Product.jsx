import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img, name, seller, ratings, price}=props.product;
    // console.log(props)
    const handleAppToCard=props.handleAppToCard;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-text'>
                <h3 className='name'>{name}</h3>
                <h3 className='price'>Price: ${price}</h3>
                <h6 className='manufacturing'>Manufacturing: {seller}</h6>
                <h6 className='rating'>Rating: {ratings} Start</h6>
            </div>
            <button onClick={()=>handleAppToCard(props.product)} className='product-btn'>
                Add To Card {element}
                
            </button>
        </div>
    );
};

export default Product;