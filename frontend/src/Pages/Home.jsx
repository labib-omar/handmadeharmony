import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import './Css/Home.css';

const Home = () => {
  return (
    <div className='home-page'>

      <Navbar />
      <Hero />
      <Footer />

    </div>
  )
}

export default Home;