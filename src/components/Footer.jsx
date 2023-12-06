import React from 'react'
import "../stylesheets/Footer.css"
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div id='footer'>
        <div className="subscribe">
            <p>Subscribe to Our NewsLetter</p>
            <input type="text" placeholder='Enter Email' />
            <button>Subscribe</button>
        </div>
        <div className="container">
            <div className="text">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae non commodi culpa odio beatae dolore ipsum maxime praesentium enim? Obcaecati quidem voluptates aut consectetur numquam et. Culpa tempora repudiandae fugiat, deserunt porro autem corporis, animi dolores placeat </p>
                <div className="icon">
                <i className='bx bxl-facebook-circle'></i>
                <i className='bx bxl-instagram'></i>
                <i className='bx bxl-twitter' ></i>
                <i className='bx bxl-youtube' ></i>
                </div>
            </div>
            <div className="link">
                <h2>Link</h2>
                <div className="item">
                    <ul>
                    <li><a href="#">Company History</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contect Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="contact-us">
                <h2>Contact Us</h2>
               <div className="item">
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore?</p>
                    <div>
                <span><i className="fa-solid fa-location-dot"></i></span>
                <p>  1201 park street, Avenue, Janakpuri, New Delhi</p>
                </div>
                <div>
                    <span><i className="fa-solid fa-phone"></i></span>
                    <p> (+91) 12345678</p>
                </div>
                <div>
                    <span><i className="fa-solid fa-envelope"></i></span>
                    <p>  info@akshay.com</p>
                </div>
               </div>
            </div>
        </div>
        <div className="last">
            <p>Copyright (c) 2023 Copyright Holder Akshay Makwana All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer