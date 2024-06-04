import React from "react";
import { popular_items } from "../data/Data";
import { GrLinkNext } from "react-icons/gr";

const PopularPost = () => {
  return (
    <>
      <div className="bg-gray-50 newsletter px-8 py-12 mt-8">
        <h4 className="text-xl font-semibold relative inline">Popular Post</h4>
        <div className="mt-4">
          {popular_items.slice(0, 3).map((val, i) => (
            <div key={i}>
              <div>
                <div className="relative">
                  <div className="blog_img overflow-hidden">
                    <img
                      src={val.popular_img}
                      alt="img"
                      className="w-full h-full hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0">
                    <div className="bg-white lg:flex gap-4 items-center px-6 py-2 text-gray-500">
                      <p className=" border-r pr-2">{val.designation}</p>
                      <p className="">{val.date}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-base font-bold">{val.title}</h2>
                  <div className="my-4">
                    <button className="bg-black flex items-center gap-2 text-orange-500 px-10 py-3">
                      Read More <GrLinkNext />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 newsletter px-8 py-12 mt-8">
        <h4 className="text-xl font-semibold relative inline">Popular Post</h4>
        <div className="mt-4 flex flex-wrap gap-4">
          {popular_items.map((val, i) => (
            <div key={i}>
              <div className="bg-white px-4 py-2 text-sm text-gray-400">
                <p>{val.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularPost;
