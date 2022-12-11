import React from 'react'
import { Header } from '../marketplace/Header'
import { Showcase } from '../marketplace/Showcase'
import { PopularProduct } from '../marketplace/PopularProducts'
import { SubscribeComponent } from '../marketplace/SubscribeComponent'
import { Footer } from '../marketplace/Footer'

export const MarketPlace = () => {
  return (
    <div className='w-full'>
          <Header /> 
          <Showcase />
          <PopularProduct />
          <SubscribeComponent />
          <Footer />
    </div>
  )
}
