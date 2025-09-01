import React from "react";

import Banner from "../component/Banner";
// import Collection from "../component/Collection";
import Crafted from "../component/Crafted";
import Featured from "../component/Featured";
import Essence from "../component/Essence";
import Testimonails from "../component/Testimonails";
import From from "../component/Form";
import Catgories  from "../component/Product";
import Img1 from '../images/products-banner.png';


function Home() {
    return (
        <>
            <Banner Title="Blue Water" secttile="Fragrances" dec1="Awaken Your Senses with Every Spritz" dec2="Dive into a world of timeless elegance and fresh sophistication. Discover our signature scents crafted to leave a lasting impression."   img={Img1} />
            <Catgories />
            {/* <Collection /> */}
            <Crafted
                title="Crafted for the Confident Man"
                tagline="Bold, captivating, and made to last—our men’s collection is designed for those who command presence. Whether you're seeking fresh daytime notes or deep evening blends, each fragrance reflects strength, charisma, and individuality."
                btn="Shop the Collection"
            />
            <Featured
                title="Featured Men Collections"
                tagline="From everyday elegance to evening allure, discover a scent for every moment."
            />
            <Essence />
            <Crafted
                title="Elegance in Every Drop"
                tagline="Discover a world of feminine charm with scents that captivate and inspire. From delicate florals to bold, sophisticated blends—our women’s collection is crafted to celebrate every mood, moment, and muse."
                btn="Shop Women’s Collection"
            />
            <Featured
                title="Featured Women Collections"
                tagline="From everyday elegance to evening allure, discover a scent for every moment."
            />
            <Testimonails
                title="Loved by Scent Lovers Everywhere"
                tagline="Our fragrances don’t just smell incredible — they become a part of your story. Here’s what our customers have to say about their unforgettable experiences with Blue Water Fragrances."
            />
            <From />
            
        </>
    );
}

export default Home;
