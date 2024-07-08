import { Button } from 'bootstrap';
import React from 'react'
import { useState, useRef } from 'react';
import AdvImage from '../../HomePage/AdvImage/AdvImage';
function ProductInfor({title,rating,price,description,image,id,category,discount}) {
  const [inputValue, setInputValue] = useState(0);
  console.log("ratting"+rating);
  const maxRating = 5;
  const calculatePrice = () => {
    return discount > 0 ? Math.round(price - ((price * discount) / 100),3) : Math.round(price,3);
  }
  const getRatting = () => {
    let a = [];
    for (let index = 1; index <= maxRating; index++) {
        a.push((index <= rating.rate)
            ? <img className='product_item_rating_star_image' src='/img/golden_star.svg'></img> 
            : <img className='product_item_rating_star_image' src='/img/grey_star.svg'></img>);
    }
    return a;

}

function handleClick(action) {
 if(action === 'add')
 {
    setInputValue(inputValue + 1);
 }
 else if(inputValue >0)
 {
    setInputValue(inputValue -1);
 }

}
  return (
    <div className='product_info_container'>
        <h1 className='product_info_name'>{title}</h1>
        <div className='product_info_ratting'>
            <div className="product_item_rating_star">{getRatting()}</div>
            <div className="product_item_rating_count">({rating.count} reviews)</div>
        </div>
        <div className='product_info_price'>${calculatePrice()}</div>
        <div className='product_info_desc'>{description}</div>
        <div className='product_info_quantity_and_buy'>
            <div className='product_info_quantity'>
              <button onClick={() =>{handleClick("sub")}}  className='product_info_quantity_btn product_info_quantity_sub_btn'>-</button>
              <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} className="product_info_quantity_input" inputMode='numeric' />
              <button onClick={() =>{handleClick("add")}}  className='product_info_quantity_btn product_info_quantity_add_btn'>+</button>
            </div>
            <div className='product_info_buy'><button>Buy Now</button></div>
        </div>
        <AdvImage img={'/img/service_product_detail.png'} />
    </div>
  )
}

export default ProductInfor