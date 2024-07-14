import React from 'react'
import { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './CheckOut.css'
import { Button } from 'antd'
function CheckOut() {
    const [ cartData, setCartData] = useState([]);
    const [ subTotal, setSubtotal] = useState(0);
    const [ discountPrice, setDiscountPrice] = useState(0);
    const [ totalPrice, setTotalPrice] = useState(0);
    const [ currCoupon, setCurrCoupon ] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [ companyName, setCompanyName] = useState('');
    const [ streetAddress , setStreetAddress] = useState('');
    const [ city, setCity] = useState('');
    const [ apartment, setApartment] = useState('');
    const [ phoneNumber, setPhoneNumber] = useState('');
    const [ email, setEmail] = useState('');
    useEffect(()=>{
        const cart = localStorage.getItem("cart");
        console.log("cart "+ typeof cart)
        if(cart != null && cart != '')
        {
            let cartInfor = JSON.parse(cart);
            setCartData(cartInfor);
            const coupon = localStorage.getItem("applyCoupon");
            if(coupon != null && coupon != '')
            {   
                console.log("coupon from local storage " + coupon)
                let couponInfo = JSON.parse(coupon);
                console.log("couponInfo " + couponInfo);
                setCurrCoupon(couponInfo);
                calculateSubTotal(cartInfor, couponInfo);
            }
            else
            {
                calculateSubTotal(cartInfor);
            }
        }
    }, [])
    const calculateSubTotal = (cartInfor, coupon) => {
        let subTotalPrice = 0;
        let discountPrice = 0;
        cartInfor?.map((cart) =>{
            subTotalPrice += Number.parseInt(cart.price) * Number.parseInt(cart.quantity);           
        })
        setSubtotal(subTotalPrice);
        if(coupon != null){
            discountPrice = Math.round((Number.parseInt(coupon.discount) / 100) * subTotalPrice);
            setDiscountPrice(discountPrice);
        }
        setTotalPrice(subTotalPrice - discountPrice);    
    }

    const completeOrder = () => {
        let orderHistory = localStorage.getItem("order") != null ? localStorage.getItem("order") : [];
        let orderId = 1;

        if (orderHistory.length > 0)
        {
            console.log("history khacs nul");
            let orderHistoryObject = JSON.parse(orderHistory);
            orderId = orderHistoryObject.length + 1;
            let order = {
                orderId:orderId,
                cartData:cartData,
                subTotal:subTotal,
                discountPrice:discountPrice,
                totalPrice:totalPrice,
                user: {
                    firstName:firstName,
                    streetAddress:streetAddress,
                    companyName:companyName,
                    city:city,
                    email:email,
                    phoneNumber:phoneNumber,
                    apartment:apartment,
                    userId:""
                }
            }
            orderHistoryObject.push(order);
            console.log("orderHistoryObject "+ JSON.stringify(orderHistoryObject))
            localStorage.setItem("order", JSON.stringify(orderHistoryObject));

        }
        else
        {
            console.log("history null");
            let order = [{
                orderId:orderId,
                cartData:cartData,
                subTotal:subTotal,
                discountPrice:discountPrice,
                totalPrice:totalPrice,
                user: {
                    firstName:firstName,
                    streetAddress:streetAddress,
                    companyName:companyName,
                    city:city,
                    email:email,
                    phoneNumber:phoneNumber,
                    apartment:apartment,
                    userId:""
                }
            }]
            localStorage.setItem("order", JSON.stringify(order));
        }       
    }
  return (
    <div className='check_out_container'>

        <Container>
            <div className='product_detail_category'>
                  {`Home > Cart > Checkout`}
            </div>
            <h2 className='check_out_title'>Billing Details</h2>
            <div className='check_out_info'>
                <div className='check_out_user_info'>
                    <div className='check_out_user_info_input check_out_user_info_first_name'>
                        <label htmlFor="firstName">FirstName</label>
                        <input onChange={(e) => setFirstName(e.target.value)} id='firstName'/>  
                    </div> 
                    <div className='check_out_user_info_input check_out_user_info_company_name'>
                        <label htmlFor="companyName">Company Name</label>
                        <input onChange={(e) => setCompanyName(e.target.value)} id='companyName'/>
                    </div>         
                    <div className='check_out_user_info_input check_out_user_info_street_address'>                     
                        <label htmlFor="streetAddress">Street Address</label>
                        <input onChange={(e) => setStreetAddress(e.target.value)} id='streetAddress'/>
                    </div>  
                    <div className='check_out_user_info_input check_out_user_info_apartment'>
                        <label htmlFor="apartment">Apartment, floor, etc (optional)</label>
                        <input onChange={(e) => setApartment(e.target.value)} id='apartment'/>
                    </div>  
                    <div className='check_out_user_info_input check_out_user_info_city'>
                        <label htmlFor="city">City</label>
                        <input onChange={(e) => setCity(e.target.value)} id='city'/>
                    </div>  
                    <div className='check_out_user_info_input check_out_user_info_phone_number'>
                        <label htmlFor="phoneNumber">PhoneNumber</label>
                        <input onChange={(e) => setPhoneNumber(e.target.value)} id='phoneNumber'/>
                    </div>  
                    <div className='check_out_user_info_input check_out_user_info_email'>
                        <label htmlFor="email">Email Address</label>
                        <input onChange={(e) => setEmail(e.target.value)} id='email'type={'email'}/>
                    </div>    
                </div>
                <div className="check_out_cart_info">
                    <div className='cart_list_container'>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                (cartData.length >= 0) 
                                    && cartData 
                                    && cartData != '' 
                                    ? cartData.map((item) =>{                             
                                        return (
                                        <>
                                            <tr>
                                                <th scope="row">
                                                    <a className='cart_item_link' href={`/product_detail?productId=${item.productId}&discount=${item.discount}`}>
                                                        <img className='cart_item_img' src={item.image} />
                                                        {item.title}
                                                    </a>
                                                </th>
                                                <td>${Number.parseInt(item.price) * Number.parseInt(item.quantity)}</td>
                                            </tr>
                                        </>)}) 
                                    : ""
                            }                
                            </tbody>
                        </table>
                    </div>
                    <div className='subtotal_container'>
                        <h2 className='subtotal_title'>
                            Cart total
                        </h2>
                        <div className='cart_total subtotal_price'>
                            <div className='subtotal_price_title'>Subtotal:</div>
                            <div className='subtotal_price_price'>${subTotal}</div>
                        </div>
                        <div className='cart_total discount_price'>
                            <div className='discount_price_title'>Discount:</div>
                            <div className='discount_price_price'>${discountPrice}</div>
                        </div>
                        <div className='cart_total subtotal_shipping_fee_container'>
                            <div className='subtotal_shipping_fee_title'>Shipping:</div>
                            <div className='subtotal_shipping_fee_price'>Free</div>
                        </div>
                        <div className='cart_total total_price_container'>
                            <div className='total_price_title'>Total:</div>
                            <div className='total_price_price'>${totalPrice}</div>
                        </div>
                        <div className='check_out_btn_continer'>
                            <Button onClick={() => completeOrder()} className='check_out_btn' >Complete Order</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container> 
    </div>
  )
}

export default CheckOut
