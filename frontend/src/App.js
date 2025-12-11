import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContext";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import LegalNotice from "./Pages/LegalNotice";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
