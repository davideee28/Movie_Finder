import React from "react";
import Slidercard from "./Slidercard";
import Home from "../pages/Home";

export default function Slider({ data, type, title}) {
  const scrollPrevious = (event) => {
    event.target.parentNode.scrollBy({
      left: -240,
      behavior: "smooth",
    });
  };
  const scrollNext = (event) => {
    event.target.parentNode.scrollBy({
        left: 240,
        behavior: "smooth",
      });
  };

  return (
    <div className="sliderContainer">
      <button className="leftButton" onClick={scrollPrevious}>
        ❮
      </button>
      {data?.map((item, index) => {
        return <Slidercard element={item} key={index} title={title} type={type} />;
      })}
      <button className="rightButton" onClick={scrollNext}>
        ❯
      </button>
    </div>
  );
}
