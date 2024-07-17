/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../../public/list.json';
import Slider from "react-slick";
import Carts from './Carts';

function Discount() {
  const filterData = list.filter((data) => data.category === "Discount");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='mx-w-screen-2xl container mx-auto md:px-20 px-10 justify-center'>
      <div>
        <h1 className='font-semibold text-xl pd-2'>🎉 Special Discount Alert! 🎉</h1>
        <p>Were thrilled to offer you an exclusive 25% off on all our products! Whether you're looking to update your wardrobe, upgrade your gadgets, or find the perfect gift, now is the perfect time to shop. Use the code SAVE25 at checkout to enjoy this limited-time offer.</p>
        <p className='pt-4'>🌟 Shop Now and Save Big! 🌟</p>
      </div>
      <div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Carts item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Discount;
