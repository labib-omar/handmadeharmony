
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Shop from "./Pages/Shop";
// import Contact from "./Pages/Contact";
// import About from "./Pages/About";
// import Product from './Pages/Product';
// import LoginSignup from './Pages/LoginSignup';
// import Cart from "./Pages/Cart";
// import Footer from './Components/Footer/Fotter'

// function App() {
//   return (
    
//     <div>
//       <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/contact" element={<Contact/>} />
//         <Route path="/about" element={<About />} />
//         <Route path='/product' element={<Product />}>
//         <Route path=':productId' element={<Product />}/>
          
//         </Route>
        
//         <Route path='/cart' element={<Cart />}/>
//         <Route path='/login' element={<LoginSignup />}/>

//       </Routes>
//       <Footer />
     
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopContextProvider from './Context/ShopContext';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Cart from "./Pages/Cart";
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
