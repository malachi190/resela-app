import React from "react";
import Home from "./components/homepage/Home";
import About from './components/about-us/About';
import Features from "./components/features/Features";
import SignUp from './components/reseller-signup/SignUp'
import ErrorPage from './components/homepage/ErrorPage'
import ResellerSignUp from './components/seller-signup/Seller'
import Login from "./components/login/Login";
import RDashboard from "./components/reseller-dashboard/RDashboard";
import ManageProducts from "./components/manage-products/ManageProducts";
import SDashboard from "./components/seller-dashboard/SDashboard";
import ForgotPassword from "./components/password-reset/ForgotPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MarketPlace } from "./components/marketplace/Marketplace";
import { ProductPlace } from "./components/productplace/ProductsPlace";
import { SingleProduct } from "./components/singleproduct/SingleProduct";
import Checkout from "./components/checkout/Checkout";
import Cart from "./components/cart/Cart";

// color codes: #8D66DC, #9E7DE1 , #9747FF

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/seller-signup" element={<ResellerSignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/password-reset' element={<ForgotPassword />}/>
          <Route path="/manage-products" element={<ManageProducts/>}/>
          <Route path="/reseller-dashboard" element={<RDashboard/>}/>
          <Route path="/seller-dashboard" element={<SDashboard/>}/>
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path='/product-place' element={<ProductPlace />} />
          <Route path='/single-product' element={<SingleProduct />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
