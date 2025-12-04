import React from 'react'
import Hero from '../Components/Hero/Hero';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer"; 

const Home = () => {
  return (
    <div>
            <Navbar />

      <Hero />
      <Footer  />
    </div>
  )
}

export default Home;
