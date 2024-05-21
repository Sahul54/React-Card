import React from 'react';
import Card from './Card';
import ProductDate from './ProductDate';



const ProductsItem = (props) => {
    return (
       <Card className ='product-item' >
        <ProductDate date = {props.date}/>
        <div className='product-Item-description'>
            <h2>{props.title}</h2>
        </div>
       </Card>
    )
}

export default ProductsItem;