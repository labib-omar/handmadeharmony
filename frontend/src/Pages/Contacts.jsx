import React from 'react'
import '../Pages/Css/Contacts.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';


const Contacts = () => {
  return (
    <div className="contacts-page">
      <Navbar />

      <div className="contacts-wrapper">

        <h1 className="contacts-title">Contact us</h1>
        <hr className='hr'/>

        <div className="contacts-box">
          
          <h2>Main Contact</h2>
          <p><strong>Email:</strong> contact@hh-handmade.com</p>
          <p><strong>Phone:</strong> +49 170 555 0199</p>
          <p><strong>WhatsApp:</strong> +49 170 555 0199</p>
          

          <h2>Support / Orders</h2>
          <p><strong>Email:</strong> support@hh-handmade.com</p>
          <p><strong>Phone:</strong> +49 511 123 4567</p>
          <p><strong>Hours:</strong> Mon–Fri 10:00–17:00 CET</p>

          <h2>Custom Orders & Commissions</h2>
          <p><strong>Email:</strong> custom@hh-handmade.com</p>
          <p><strong>Lead time:</strong> 10–30 business days</p>

          <h2>Returns & Exchanges</h2>
          <p>H.H Returns</p>
          <p>c/o H.H Studio — Returns Dept.</p>
          <p>Lindenstraße 12, Unit B3</p>
          <p>30159 Hannover, Germany</p>

          <h2>Business / Studio Address</h2>
          <p>H.H Studio — Showroom by appointment</p>
          <p>Lindenstraße 12</p>
          <p>30159 Hannover, Germany</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
