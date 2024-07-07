import React from 'react'
import './ProductDetail.css'
import ProductInfor from './ProductInfor'
import ProductImage from './ProductImage'
function ProductSingle() {
  return (
    <div className='product_detail_container'>
        <ProductImage />
        <ProductInfor 
          discount={0}
          rating={{rate:'4',count:'50'}}
          price={500}
        />
   </div>
  )
}

export default ProductSingle
