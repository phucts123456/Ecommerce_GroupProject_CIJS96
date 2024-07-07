import React from 'react'
import { Container } from 'react-bootstrap'
import ProductItem from './ProductItem'
import './ProductList.css'
function ProductList({products}) {
  console.log("products" +products)
  return (
    <div className='product_list_container'>
      {
        products != "" ?
        products?.map((item) => {
          return <ProductItem 
            title={item.title} 
            discount={40} 
            image={item.image} 
            price={item.price} 
            rating={item.rating} 
            id={item.id}/>
        }) : ""
      }
    </div>
  )
}

export default ProductList
