import React from "react";
import leftImg from '../assets/left-img.png'
import rightImg from '../assets/right-img.png'

export const ImgContainer:React.FC=()=> {
    return (
      <div className="flex items-center justify-between p-4 bg-white">
        <img src={leftImg} alt="some vegetables"></img>
        <div className="right-container-img">
          <img src={rightImg} alt="some vegetables"></img>
          <span className="about-img">
            <b>Central California</b> — The person who grew these was located in
            Central California and, er, hopefully very well-compensated.
          </span>
        </div>
      </div>
    );
  }