import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../component/product/Product';

const Shop = () => {
    const [products, setProducts]=useState([])
    const[card, setCard]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
        
    const handleAppToCard=(product)=>{
        // console.log(product)
        const newCard=[...card, product]
        setCard(newCard)
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=><Product
                        product={product}
                        handleAppToCard={handleAppToCard}
                        >
                    </Product>)
                    
                }
            </div>
            <div className='card-container'>
                <h3>Order Summery</h3>
                <p>select card: {card.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;