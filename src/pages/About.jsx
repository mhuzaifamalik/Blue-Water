import React from 'react'
import Banner from '../component/Banner'
import AboutMultisection from '../component/AboutMultisection'
import Collection from '../component/Collection'
import Img1 from '../images/about-banner.png';

function About() {
  return (
    <div>
      <section className="main-about-us">
        <Banner 
          Title="Our Story" 
          secttile="Our Essence" 
          dec1="Awaken Your Senses with Every Spritz" 
          img={Img1}
          dec2="Dive into a world of timeless elegance and fresh sophistication. Discover our signature scents crafted to leave a lasting impression." 
        />
        <AboutMultisection />
      </section>
    </div>
  )
}

export default About
