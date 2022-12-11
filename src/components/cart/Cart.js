import React, {useState} from 'react'
import { Header } from '../marketplace/Header'
import CartInfo from './CartInfo'
import { Footer } from '../marketplace/Footer'


const Cart = () => {
  return (
    <>
      <Header/>
      <CartInfo/>
      <Footer/>
    </>
  )
}

export default Cart
