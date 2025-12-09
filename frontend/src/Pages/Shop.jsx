import React from 'react'
import AllProducts from '../Components/AllProducts/AllProducts'
import NewCollection from '../Components/NewCollections/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
      <Navbar />
      {/*<Popular />*/}
      <NewCollection />
      <AllProducts />
      <NewsLetter />
      <Footer />
      
    </div>
  )
}

export default Shop


