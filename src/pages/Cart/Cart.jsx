import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './Cart.css'
function Cart() {
    const [cartData, setCartData] = useState(null);
    useEffect(()=>{
        const cart = localStorage.getItem("cart");
        setCartData(JSON.parse(cart));
    }, [])
  return (
    <div className='cart_container'>
        <Container>
            <div className='product_detail_category'>
                {'Home > Cart'}
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartData ? cartData.map((item) =>{
                                return (
                                <>
                                    <tr>
                                        <th scope="row">
                                            <a className='cart_item_link' href={`/product_detail?productId=${item.productId}&discount=${item.discount}`}>
                                                <img className='cart_item_img' src={item.image} />
                                                {item.title}
                                            </a>
                                        </th>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{Number.parseInt(item.price) * Number.parseInt(item.quantity)}</td>
                                    </tr>
                                </>)

                            }) : ""
                        }
                       
                    </tbody>
                </table>
            </div>
        </Container>
    </div>
  )
}

export default Cart