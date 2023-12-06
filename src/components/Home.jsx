import React from 'react'
import "../stylesheets/Home.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import hotel1 from "../assets/Hotel/hotel-1.jpg"
import hotel2 from "../assets/Hotel/hotel-2.jpg"
import hotel3 from "../assets/Hotel/hotel-3.jpg"
import hotel4 from "../assets/Hotel/hotel-4.jpg"
import hotel5 from "../assets/Hotel/hotel-5.jpg"

const Home = () => {


    const options = {
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        nav:false,
        dots:false,
        margin:0,
        responsive:{
            1100:{
                items:2,
            },
            724:{
                items:1,
            },
            500:{
                items:1,
            },
            370:{
                items:1,
                innerWidth:"100%",
                innerHeight:"100%"
            }
        }
    }

  return (
    <div id='home'>
   <OwlCarousel className='owl-theme' {...options} >
    <div className='item'>
       <img src={hotel1} alt="" />
       <div className="text">
        <span>Spend Your Holiday</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="flex">
            <button>READ MORE</button>
            <button>CONTACT US</button>
        </div>
       </div>
    </div>
    <div className='item'>
       <img src={hotel2} alt="" />
       <div className="text">
        <span>Spend Your Holiday</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="flex">
            <button>READ MORE</button>
            <button>CONTACT US</button>
        </div>
       </div>
    </div>
    <div className='item'>
       <img src={hotel3} alt="" />
       <div className="text">
        <span>Spend Your Holiday</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="flex">
            <button>READ MORE</button>
            <button>CONTACT US</button>
        </div>
       </div>
    </div>
    <div className='item'>
       <img src={hotel4} alt="" />
       <div className="text">
        <span>Spend Your Holiday</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="flex">
            <button>READ MORE</button>
            <button>CONTACT US</button>
        </div>
       </div>
    </div>
    <div className='item'>
       <img src={hotel5} alt="" />
       <div className="text">
        <span>Spend Your Holiday</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="flex">
            <button>READ MORE</button>
            <button>CONTACT US</button>
        </div>
       </div>
    </div>
</OwlCarousel>
    </div>
  )
}

export default Home