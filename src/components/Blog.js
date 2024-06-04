import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { SlUser } from "react-icons/sl";
import { FiCalendar } from "react-icons/fi";
import { TbMessageStar } from "react-icons/tb";
import { blog } from "../data/Data";

const Blog = () => {
  return (
    <>
      <div>
        {blog.map((val, key) => (
          <div key={key}>
            <div>
              <div className="relative">
                <div className="blog_img h-96 overflow-hidden">
                  <img
                    src={val.blog_img}
                    alt="img"
                    className="w-full h-full object-cover hover:scale-105 duration-300 ease-in-out"
                  />
                </div>
                <div className="absolute bottom-0">
                  <div className="bg-white lg:flex gap-4 items-center px-6 py-4 text-gray-500">
                    <p className="flex items-center gap-2">
                      <SlUser />
                      {val.role}
                    </p>
                    <p className="flex items-center gap-2">
                      <FiCalendar />
                      {val.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <TbMessageStar />
                      {val.comment}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold">{val.title}</h2>
                <p className="my-3 text-gray-400">Tag: {val.tag}</p>
                <p className="text-gray-500">{val.description}</p>
                <div className="my-4">
                  <button className="bg-black flex items-center gap-2 text-orange-500 px-10 py-3 hover:bg-white hover:text-black hover:shadow-lg">
                    Read More <GrLinkNext />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
