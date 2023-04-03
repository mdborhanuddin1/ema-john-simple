import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props.card)
    const card=props.card;
    // for of loop in card array
    let totalPrice=0;
    let totalShipping=0;
    for(const product of card){
        totalPrice=totalPrice+product.price;
        totalShipping=product.shipping;
    }

    const tax=(totalPrice*7)/100;
    const grandTotal=totalPrice + totalShipping + tax;

    return (
        <div className='card-info'>
                <h3>Order Summery</h3>
                <p>select card: {card.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: ${tax}</p>
                <p>Grand Price: ${grandTotal}</p>
        </div>
    );
};

export default Card;