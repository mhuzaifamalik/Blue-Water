import React from 'react'
import Banner from '../component/Banner'
import Crafted from '../component/Crafted'
import Featured from '../component/Featured'
import Img1 from '../images/shopBanner.png';



function Shop() {
  return (
    <div>
      <Banner Title="Discover Your" secttile="Signature Scent" dec1="We’d love to hear from you" dec2="Whether you have a question about your order, need help choosing a fragrance, or want to collaborate, our team is here to assist you every step of the way." img={Img1} />

      <Crafted
        title="Crafted for the Confident Man"
        tagline="Bold, captivating, and made to last—our men’s collection is designed for those who command presence. Whether you're seeking fresh daytime notes or deep evening blends, each fragrance reflects strength, charisma, and individuality."
        btn="Shop the Collection"
      />
        <Featured
                title="Featured  Perfume Collections"
                tagline="From everyday elegance to evening allure, discover a scent for every moment."
            />
            <Crafted
        title="Crafted for the Confident Man"
        tagline="Bold, captivating, and made to last—our men’s collection is designed for those who command presence. Whether you're seeking fresh daytime notes or deep evening blends, each fragrance reflects strength, charisma, and individuality."
        btn="Shop the Collection"
      />
  <Featured
                title="Featured  Perfume Collections"
                tagline="From everyday elegance to evening allure, discover a scent for every moment."
            />
    </div>
  )
}

export default Shop
