import React from 'react'
import Form from '../component/Form'
import Banner from '../component/Banner'
import CallTpAction from '../component/callToAction'
import Img1 from '../images/ContactUs.png';

function Contact() {
    return (
        <div>
            <section className="contact">
                <Banner Title="Let’s Stay" secttile="Connected" dec1="We’d love to hear from you" dec2="Whether you have a question about your order, need help choosing a fragrance, or want to collaborate, our team is here to assist you every step of the way." img={Img1}/>
                <Form />
                <CallTpAction />

            </section>
        </div>
    )
}

export default Contact
                  