import React from 'react'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollections/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
      <Navbar />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
      <Footer />
      
    </div>
  )
}

export default Shop


