import React from "react";
import { bannerSlider } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const BannerSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <GrLinkNext />,
    prevArrow: <GrLinkPrevious />,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-10/12 m-auto">
        <div className="mt-4">
          <Slider {...settings}>
            {bannerSlider.map((banner, index) => (
              <div key={index}>
                <div className="">
                  <div className="mr-4 overflow-hidden">
                    <img
                      src={banner.img}
                      alt="img"
                      className="w-full h-full hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div className="text-center">
                    <div>
                      <div className="py-3 text-center">
                        <button className="border px-10 py-1 bg-black text-orange-500">
                          {banner.btn}
                        </button>
                      </div>
                      <h1 className="text-lg font-semibold">{banner.title}</h1>
                      <p className="text-base mt-2 text-gray-500">
                        {banner.day}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
