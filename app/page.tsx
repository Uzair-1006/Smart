import React from 'react'
import Header from '@/Components/Header'
import Products from '@/Components/Products'
import Price from '@/Components/Sipon_Display'
import Bindu_Display from '@/Components/Bindu_Display'
import Footer from '@/Components/Footer'
import Offer from '@/Components/Offer'

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