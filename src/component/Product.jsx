import React from 'react'
import img1 from "../images/product-categor/1.png";
import img2 from "../images/product-categor/2.png";
import img3 from "../images/product-categor/3.png";
import img4 from "../images/product-categor/4.png";
import img5 from "../images/product-categor/5.png";
import img6 from "../images/product-categor/6.png";
import img7 from "../images/product-categor/7.png";

const products = [
  { name: "Samples", img: img1, link: "/category/samples" },
  { name: "Shampoo/Body Wash", img: img2, link: "/category/shampoo-bodywash" },
  { name: "Hand/Body Lotion", img: img3, link: "/category/hand-body-lotion" },
  { name: "EDP Perfume Spray", img: img4, link: "/category/edp-perfume-spray" },
  { name: "Fragrance Oils", img: img5, link: "/category/fragrance-oils" },
  { name: "Dry Oil Perfume Spray", img: img6, link: "/category/dry-oil-perfume-spray" },
  { name: "Perfume Roll-On", img: img7, link: "/category/perfume-roll-on" },
]

function Product() {
  return (
    <div className="bg-black py-8">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
        {products.map((product, index) => (
          <li key={index} className="flex flex-col items-center">
            <a href={product.link} className="flex flex-col items-center group">
              <img
                src={product.img}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform"
              />
              <p className="mt-2  font-syne font-medium text-center text-white group-hover:bg-[linear-gradient(90deg,_rgba(67,170,214,1)_60%,_rgba(1,14,1,12)_100%)] group-hover:bg-clip-text group-hover:text-transparent transition">
                {product.name}
              </p>

            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Product
