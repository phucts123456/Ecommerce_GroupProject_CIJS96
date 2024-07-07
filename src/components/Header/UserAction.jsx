import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function UserAction() {
  return (
    <div className='user_action_container'>
        <FontAwesomeIcon className='user_action_item user_action_cart' icon="fa-solid fa-cart-shopping" /> 
        <FontAwesomeIcon className='user_action_item user_action_user' icon="fa-regular fa-circle-user" />
    </div>
  )
}

export default UserAction
