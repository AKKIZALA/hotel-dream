import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "../stylesheets/Header.css";

const Header = () => {
  const [toggl, settoggl] = useState(false);
  const [nav, setnav] = useState(true);

  function clickHandle(){
    settoggl(!toggl)
  };


  return (
    <div id="header">
      <div className="img_sec">
        <img src={logo} alt="" />
      </div>
      <ul>
        <a href="#home">home</a>
        <a href="#services">services</a>
        <a href="#room">rooms</a>
        <a href="#footer">contact</a>
      </ul>
      <div className="btn_box">
        <a href="#"></a>
        <i className="bx bx-search"></i>
        <button>book now</button>
        <i
          className={toggl ? "bx bx-x to" : "bx bx-menu to"}
          onClick={clickHandle}
        ></i>
      </div>
      <div 
        className={(toggl) ? "baar": ""}
        style={(toggl) ?  { display: "block" }: {display:"none"}} onClick={clickHandle}
      >
        <ul onClick={clickHandle}>
          <a href="#home">home</a>
          <a href="#services">services</a>
          <a href="#room">rooms</a>
          <a href="#footer">contact</a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
