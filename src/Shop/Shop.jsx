import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../component/product/Product';
import Card from '../component/card/Card';

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
        // console.log(newCard)
        setCard(newCard)
    }
    // console.log(card)
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
                <Card card={card}></Card>
            </div>
            
        </div>
    );
};

export default Shop;