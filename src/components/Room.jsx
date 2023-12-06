import React from "react";
import "../stylesheets/Room.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import room1 from "../assets/Rooms/room1.jpg";
import room2 from "../assets/Rooms/room2.jpg";
import room3 from "../assets/Rooms/room3.jpg";
import room4 from "../assets/Rooms/room4.jpg";
import room5 from "../assets/Rooms/room5.jpg";
import room6 from "../assets/Rooms/room6.jpg";
import room7 from "../assets/Rooms/room7.jpg";

const Room = () => {
  const option = {
    loop: true,
    autoplay:true,
    autoplaySpeed: 2000,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div id="room">
      <div className="explore">
        <h1>explore</h1>
        <h2>Our Rooms</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          commodi!
        </p>
      </div>
      <div className="rooms">
        <OwlCarousel className="owl-theme" {...option}>
          <div className="item">
            <img src={room1} alt="" />
            <div className="info">
              <div>Superior Rooms</div>
              <div>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt quod commodi
              </p>
              <div className="btn-box">
                <button>book now</button>
                <div className="prize">
                  <h2>$250</h2>
                  <p>Per Night</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={room2} alt="" />
            <div className="info">
              <div>Superior Rooms</div>
              <div>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt quod commodi
              </p>
              <div className="btn-box">
                <button>book now</button>
                <div className="prize">
                  <h2>$250</h2>
                  <p>Per Night</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={room3} alt="" />
            <div className="info">
              <div>Superior Rooms</div>
              <div>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt quod commodi
              </p>
              <div className="btn-box">
                <button>book now</button>
                <div className="prize">
                  <h2>$250</h2>
                  <p>Per Night</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={room4} alt="" />
            <div className="info">
              <div>Superior Rooms</div>
              <div>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt quod commodi
              </p>
              <div className="btn-box">
                <button>book now</button>
                <div className="prize">
                  <h2>$250</h2>
                  <p>Per Night</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={room5} alt="" />
            <div className="info">
              <div>Superior Rooms</div>
              <div>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt quod commodi
              </p>
              <div className="btn-box">
                <button>book now</button>
                <div className="prize">
                  <h2>$250</h2>
                  <p>Per Night</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={room6} alt="" />
            <div className="info">
              <div>Superior Rooms</div>
              <div>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt quod commodi
              </p>
              <div className="btn-box">
                <button>book now</button>
                <div className="prize">
                  <h2>$250</h2>
                  <p>Per Night</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={room7} alt="" />
            <div className="info">
              <div>Superior Rooms</div>
              <div>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt quod commodi
              </p>
              <div className="btn-box">
                <button>book now</button>
                <div className="prize">
                  <h2>$250</h2>
                  <p>Per Night</p>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Room;
