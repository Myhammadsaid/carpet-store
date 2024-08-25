import React from "react";
import heroImg1 from "../../assets/heroImg1.png";
import heroImg2 from "../../assets/heroImg2.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__style">
            <div className="hero__content">
              <h1 className="hero__content__text">
                Новая коллекция ковров Venetta
              </h1>
              <button className="hero__content__btn">Смотреть все</button>
            </div>
            <div className="hero__images">
              <img src={heroImg1} alt="heroImg" />
              <img src={heroImg2} alt="heroImg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
