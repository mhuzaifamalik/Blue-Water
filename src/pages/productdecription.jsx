import React from 'react'
import { Row, Col } from "antd";
import Img from "../images/products/product1.png"

function ProductDescription() {
    return (
        <div className="bg-black min-h-screen"> {/* 👈 full black background */}
            <section className="main-product-page pt-40 pb-40">
                <div className="container mx-auto p-10">
                    <Row gutter={[16, 16]} justify="center" align="middle">
                        {/* Product Image */}
                        <Col span={12} style={{ textAlign: "center" }}>
                            <div className="main-product-slide p-[50px] bg-gray-900 mx-auto flex justify-center rounded-2xl shadow-lg">
                                <img className="mx-auto block" src={Img} alt="Product" />
                            </div>
                        </Col>

                        {/* Product Description */}
                        <Col span={12} >
                            <div className="main-product-desciption text-white px-6">
                                <div className="product-dce-title">
                                    <h1 className="text-3xl font-bold mb-4">Dry Oil</h1>
                                    <p className="text-gray-300 mb-6">
                                        2oz Dry Oil Body Spray Perfume Oil Fragrance Oil Cologne Oils 2oz 60ml
                                    </p>
                                </div>
                                <p>This Offer Is For 1 Item Only!</p>
                                <p>Leave Your Fragrance Choice At Checkout</p>
                                <p>Under" NOTE TO BLUE WATER FRAGRANCES"</p>
                                <p>Fragrance shopping at BLUE WATER FRAGRANCES is special & unique in the following ways!!</p>
                                <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base font-outfit">
                                    {/* Left Column */}
                                    <ul className="space-y-3 list-disc list-inside">
                                        <li>We offer Over 1800 Fragrance Items</li>
                                        <li>Over 300 FRAGRANCES</li>
                                        <li>Over 200 DESIGNER INSPIRED SCENTS</li>
                                        <li>17 Different Fragrance Categories</li>
                                        <li>FAST & FREE USA SHIPPING</li>
                                    </ul>

                                    {/* Right Column */}
                                    <ul className="space-y-3 list-disc list-inside">
                                        <li>17 Years in Business</li>
                                        <li>10 Years on ETSY.COM</li>
                                        <li>OVER 16000 ETSY SALES</li>
                                        <li>5 STAR RATED – HIGH CUSTOMER SATISFACTION</li>
                                    </ul>
                                </div>
                            <div className="pricing-section">
                                
                            </div>
                                <button className="add-to-cart-btn bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                                    Add to Cart
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default ProductDescription
