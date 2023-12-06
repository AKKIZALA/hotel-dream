import React from 'react'
import "../stylesheets/Gallery.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import gal1 from "../assets/Gallery/gal-1.jpg"
import gal2 from "../assets/Gallery/gal-2.jpg"
import gal3 from "../assets/Gallery/gal-3.jpg"
import gal4 from "../assets/Gallery/gal-4.jpg"
import gal5 from "../assets/Gallery/gal-5.jpg"

const Gallery = () => {

const op = {
   loop:true,
   autoplay:true,
    autoplaySpeed:100,
    dots:false,
    nav:false,
    margin:5,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      1000:{
        items:3
      }
   }
}

  return (
    <div id='gallery'>
        <div className="gallery1">
            <h1>photos</h1>            
            <h2>Our Gallery</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, sunt!</p>
        </div>
        <div className="gallery2">
         <OwlCarousel className='owl-theme' {...op}>
         <div className="item">
            <img src={gal1} alt="" />
            </div>
         <div className="item">
            <img src={gal2} alt="" />
            </div>
         <div className="item">
            <img src={gal3} alt="" />
            </div>
         <div className="item">
            <img src={gal4} alt="" />
            </div>
         <div className="item">
            <img src={gal5} alt="" />
            </div>
         </OwlCarousel>
        </div>
    </div>
  )
}

export default Gallery