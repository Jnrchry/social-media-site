import React from "react";
import "./rightbarhome.scss";

const Rightbarhome = () => {
  return (
    <div className="rightbarHome">
      <div className="birthdayContainer">
        <img
          src="./assets/birthdaygifts/gift.png"
          alt=""
          className="birthdayImg"
        />

        <span className="birthdayText">
          <b>Felix Asare</b> and <b>other firends have a birthday today</b>
        </span>
      </div>

      <img src="./assets/ads/adv.jpg" alt="" className="rightAdvert" />
    </div>
  );
};

export default Rightbarhome;
