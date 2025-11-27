
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from "./Pages/Cart";


function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About />} />
        <Route path='/product' element={<Product />} >
        <Route path=':productId' element={<Product />}/>
          
        </Route>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<LoginSignup />}/>

      </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App;
