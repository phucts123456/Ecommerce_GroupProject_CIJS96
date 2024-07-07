import { Button } from 'bootstrap';
import React from 'react'
import { useState } from 'react';

function ProductInfor({title,rating,price,description,image,id,category,discount}) {
  const [quantity, setQuantity] = useState(0);
  const maxRating = 5;
  console.log("rerender");
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
  return (
    <div className='product_info_container'>
        <h1 className='product_info_name'>PS5</h1>
        <div className='product_info_ratting'>
            <div className="product_item_rating_star">{getRatting()}</div>
            <div className="product_item_rating_count">({rating.count} reviews)</div>
        </div>
        <div className='product_info_price'>${calculatePrice()}</div>
        <div className='product_info_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe ad molestias tempore, fugiat qui mollitia magni quidem voluptates provident sed voluptatem consectetur eligendi corporis? Iure sunt ea deleniti eos!</div>
        <div className='product_info_quantity_and_buy'>
            <div className='product_info_quantity'>
              <button onClick={() =>{if(quantity > 0) setQuantity(quantity-1)}}  className='product_info_quantity_btn product_info_quantity_sub_btn'>-</button>
              <input value={quantity} className="product_info_quantity_input" inputMode='numeric' />
              <button onClick={() =>{setQuantity(quantity+1)}}  className='product_info_quantity_btn product_info_quantity_add_btn'>+</button>
            </div>
            <div className='product_info_buy'><button>Buy Now</button></div>
        </div>
    </div>
  )
}

export default ProductInfor