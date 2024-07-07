import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SearchBar() {
  return (
    <div className='search_bar_container'>
      <div className='search_bar_content'>
        <input className='search_bar_content_search_input' placeholder='What are you looking for' />
        <FontAwesomeIcon className='search_bar_content_icon' icon="fa-solid fa-magnifying-glass" />  
      </div>  
    </div>
  )
}

export default SearchBar
