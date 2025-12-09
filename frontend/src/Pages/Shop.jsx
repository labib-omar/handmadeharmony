import React from 'react'
import AllProducts from '../Components/AllProducts/AllProducts'
import NewCollection from '../Components/NewCollections/NewCollection'
import Offers from '../Components/Offers/Offers'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
      
      <Navbar />
      {/*<Popular />*/}
      <NewCollection />
      <Offers />
      <AllProducts />
      <Footer />
      
    </div>
  )
}

export default Shop


