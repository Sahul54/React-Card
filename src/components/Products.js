import React  from "react";

import ProductsItem from "./ProductItem";
import Card from "./Card";
import './Products.css';

 
function Products(props){
    return (
        <>
          <Card className = "products">
            <ProductsItem 
              title = {props.items[0].title}
              amount = {props.items[0].amount}
              data = {props.item[0].date}
            />

            <ProductsItem 
              title = {props.items[0].title}
              amount = {props.items[0].amount}
              data = {props.item[0].date}
            />

            <ProductsItem 
              title = {props.items[0].title}
              amount = {props.items[0].amount}
              data = {props.item[0].date}
            />

            <ProductsItem 
              title = {props.items[0].title}
              amount = {props.items[0].amount}
              data = {props.item[0].date}
            />
          </Card>
        </>
    )
}

export default Products;