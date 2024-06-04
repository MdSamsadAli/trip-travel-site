import React from "react";
import { banner } from "../data/Data";

const Banner = () => {
  return (
    <>
      <div className="w-10/12 m-auto">
        <div>
          {banner.map((banner, index) => (
            <>
              <div key={index} className="relative">
                <div className="banner-img">
                  <img src={banner.img} alt="img" className="w-full h-full" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                  <div>
                    <h3 className="text-2xl font-bold">Tours & Travels</h3>
                    <h1 className="text-4xl font-bold">
                      Amazing Place On Earth
                    </h1>
                    <p className="text-base mt-2">Saturday, June 1st 2024</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
