import React from "react";
import mainImg from '../assets/left-img.png'
import subMainImg from '../assets/right-img.png'
import '../css/img-container.scss'

export const ImgContainer:React.FC=()=> {
    return (
      <div className="img-container">
        <img src={mainImg} alt="some vegetables"></img>
        <div className="right-container-img">
          <img src={subMainImg} alt="some vegetables"></img>
          <span className="about-img">
            <b>Central California</b> — The person who grew these was located in
            Central California and, er, hopefully very well-compensated.
          </span>
        </div>
      </div>
    );
  }