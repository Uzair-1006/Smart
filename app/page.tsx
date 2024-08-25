import React from 'react'
import Header from '@/components/Header'
import Products from '@/components/Products'
import Price from '@/components/Sipon_Display'
import Bindu_Display from '@/components/Bindu_Display'
import Footer from '@/components/Footer'
import Offer from '@/components/Offer'

const page = () => {
  return (
    <div>
      <Header/>
      <Products/>
      <Price/>
    <Bindu_Display/>
    <Offer/>
    <Footer/>
    
    </div>
  )
}

export default page