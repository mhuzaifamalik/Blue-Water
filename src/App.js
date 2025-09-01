import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./component/header";
import Footer from "./component/Footer";
import About from "./pages/About"
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Product_description from "./pages/productdecription";
import Terms from "./pages/TermsConditions";
import Privacy from "./pages/PrivacyPolicy";
import Refund from "./pages/ReturnPolicy";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/product_description" element={<Product_description />} />
        <Route path="/TermsConditions" element={<Terms />} />
        <Route path="/PrivacyPolicy" element={<Privacy />} />
        <Route path="/RefundPolicy" element={<Refund />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
