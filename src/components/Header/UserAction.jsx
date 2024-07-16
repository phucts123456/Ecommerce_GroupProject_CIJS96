import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function UserAction() {
  return (
    <div className='user_action_container'>
      <a className='icon_link' href='/cart'><FontAwesomeIcon className='user_action_item user_action_cart' icon="fa-solid fa-cart-shopping" /></a>
      <a className='icon_link' href='/login'><FontAwesomeIcon className='user_action_item user_action_user' icon="fa-regular fa-circle-user" /></a>
    </div>
  )
}

export default UserAction
