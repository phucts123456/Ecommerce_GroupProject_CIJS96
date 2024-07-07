import React from 'react'
import { Container } from 'react-bootstrap'
import ProductSingle from '../../components/ProductDetail/ProductSingle/ProductSingle'
import './ProductDetail.css'
function ProductDetail() {
  return (
    <div className='product_detail_container'>
        <Container>
             <div className='product_detail_category'>
              {"adf/sdafdsf"}
             </div>
             <ProductSingle />
        </Container>
    </div>
  )
}

export default ProductDetail