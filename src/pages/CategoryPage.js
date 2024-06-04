import React from "react";
import Heading from "../common/Heading";
import NewsLetter from "../components/NewsLetter";
import Category from "../components/Category";
import PopularPost from "../components/PopularPost";
import { GrLinkNext } from "react-icons/gr";
import { TbMessageStar } from "react-icons/tb";
import { SlUser } from "react-icons/sl";
import { blog } from "../data/Data";

const CategoryPage = () => {
  return (
    <>
      <div>
        <Heading
          banner={
            <img
              src="./images/hero-banner.png"
              alt="img"
              className="w-full h-full object-cover"
            />
          }
          title={"Category"}
          to={"Home"}
          current={"Category"}
        />
      </div>
      <div className="w-10/12 m-auto mt-16">
        <div className="flex gap-8">
          <div className="w-2/3">
            <div className="grid grid-cols-2 gap-8">
              {blog.map((val, key) => (
                <div key={key}>
                  <div>
                    <div className="relative">
                      <div className="blog_img h-96">
                        <img
                          src={val.blog_img}
                          alt="img"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="absolute bottom-0">
                        <div className="bg-white flex gap-4 items-center px-6 py-4 text-gray-500">
                          <p className="flex items-center gap-2">
                            <SlUser />
                            {val.role}
                          </p>
                          <p className="flex items-center gap-2">
                            <TbMessageStar />
                            {val.comment}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold">{val.title}</h2>
                      <p className="text-gray-500">{val.description}</p>
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

          <div className="w-1/3">
            <NewsLetter />
            <Category />
            <PopularPost />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
