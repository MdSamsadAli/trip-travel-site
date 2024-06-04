import React from "react";
import NewsLetter from "./NewsLetter";
import Category from "./Category";
import PopularPost from "./PopularPost";
import Blog from "./Blog";

const BlogWrap = () => {
  return (
    <>
      <div className="w-10/12 m-auto lg:flex gap-8 mt-32">
        <div className="lg:w-2/3">
          <Blog />
        </div>

        <div className="lg:w-1/3">
          <NewsLetter />
          <Category />
          <PopularPost />
        </div>
      </div>
    </>
  );
};

export default BlogWrap;
