import React from 'react';
import "./Sliders.scss";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderImages } from '../../utils/images';

const Sliders= () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
           {sliderImages.map((image, index) => (
        <div className="hero-slider-item" key={index}>
         <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
      </Slider>
    </div>
  );
};

export default Sliders;
