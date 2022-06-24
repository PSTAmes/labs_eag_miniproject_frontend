import React from "react";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
