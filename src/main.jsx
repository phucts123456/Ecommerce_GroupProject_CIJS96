import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage/HomePage.jsx'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import NotFound from './pages/NotFound/NotFound.jsx'
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx'
import Cart from './pages/Cart/Cart.jsx'
library.add(faMagnifyingGlass,faCartShopping,faCircleUser);
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' Component={HomePage} />
      <Route path='/product_detail' Component={ProductDetail} />
      <Route path='/cart' Component={Cart} />
      <Route exact path='*' Component={NotFound} />
    </Routes>  
  </BrowserRouter>,
)
