import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './component/header';
import Banner from './component/Banner'; 
import Collection from './component/Collection'; 
import Crafted from './component/Crafted'; 
import Featured from './component/Featured';
import Essence from './component/Essence';
import Testimonails from './component/Testimonails';
import Footer from './component/Footer'; // Assuming you have a Footer component
import From from './component/Form'; // Assuming you have a Form component  
gsap.registerPlugin(ScrollTrigger); // 👈 Register ScrollTrigger

function App() {
  useEffect(() => {
    // Global animations if needed
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
      <Collection />
      <Crafted title="Crafted for the Confident Man" tagline="Bold, captivating, and made to last—our men’s collection is designed for those who command presence. Whether you're seeking fresh daytime notes or deep evening blends, each fragrance reflects strength, charisma, and individuality."  btn='Shop the Collection'  />
      <Featured  title="Featured  Men Collections" tagline="From everyday elegance to evening allure, discover a scent for every moment." />
      <Essence />
       <Crafted title="Elegance in Every Drop" tagline="Discover a world of feminine charm with scents that captivate and inspire. From delicate florals to bold, sophisticated blends—our women’s collection is crafted to celebrate every mood, moment, and muse."  btn='Shop Women’s Collection'  />
      <Featured  title="Featured  Women Collections" tagline="From everyday elegance to evening allure, discover a scent for every moment."/>
    <Testimonails tilte="Loved by Scent Lovers Everywhere"  tagline="Our fragrances don’t just smell incredible — they become a part of your story. Here’s what our customers have to say about their unforgettable experiences with Blue Water Fragrances."/>
    <From />
    <Footer />
    
    </div>
  );
}

export default App;
