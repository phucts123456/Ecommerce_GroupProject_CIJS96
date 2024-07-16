import React,{useState} from 'react'
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './OrderHistoryList.css'
function OrderHistoryList() {
    const [ orderList, setOrderList] = useState([]);
    useEffect(() => {
        let orderList = localStorage.getItem('order') != null ? JSON.parse(localStorage.getItem('order')) : null;
        if(orderList != null)
        {
            let loginUser = localStorage.getItem("loginUser") != null 
            ? JSON.parse(localStorage.getItem("loginUser")) 
            : null;
            let userId = '';
            if(loginUser != null) userId = loginUser.userId;
            let userOrder =  orderList.filter((order) => order.user.userId == userId);          
            setOrderList(userOrder);
        }
    }, []);
    const viewOrderDetail = () => {
        console.log('first')
    }
    return (
        <div className='order_history_list_container'>
            <Container>
                <div className='product_detail_category'>
                    {'Home > OrderHistoryList'}
                </div>
                <div className='cart_list_container'>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Order Id</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Items</th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            (orderList.length >= 0) 
                                && orderList 
                                && orderList != '' 
                                ? orderList.map((item) =>{                             
                                    return (
                                    <>
                                        <tr className='order_history_row' onClick={() => viewOrderDetail()}>
                                            <th scope="row">
                                                <a className='cart_item_link' href={`/product_detail?productId=${item.productId}&discount=${item.discount}`}>
                                                    <img className='cart_item_img' src={item.image} />
                                                    {item.orderId}
                                                </a>
                                            </th>
                                            <td>{item.orderDate}</td>
                                            <td>{item.user.fullName}</td>
                                            <td>{item.cartData.length}</td>
                                            <td>{item.totalPrice}</td>
                                        </tr>
                                    </>)}) 
                                :  ""
                        }                
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )
}

export default OrderHistoryList
