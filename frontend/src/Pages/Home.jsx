import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Offers from '../Components/Offers/Offers'
import './Css/Home.css';

const Home = () => {
  return (
    <div className='home-page'>

      <Navbar />
      <Hero />
            <Offers />
      <Footer />

    </div>
  )
}

export default Home;