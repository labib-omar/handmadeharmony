import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import NewsLetter from '../Components/NewsLetter/NewsLetter'

import './Css/Home.css';

const Home = () => {
  return (
    <div className='home-page'>

      <Navbar />
      <Hero />
      <NewsLetter />
      <Footer />

    </div>
  )
}

export default Home;