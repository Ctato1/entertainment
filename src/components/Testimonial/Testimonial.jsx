import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Item from '../UI/Item'

const Testimonial = ({ aboutData }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          cssEase: "linear",
          arrows: false,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5500,
          cssEase: "linear",
          pauseOnHover: true,
        },
      },
    ],
  };
console.log(aboutData);
  return (
    <div className="cart__section-slider">
      <Slider {...settings}>
        {aboutData.map((item, index) => (
          <div
            id="cart__section-test"
            key={index}
          >
            <Item itemInfo={item}/>
   
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
