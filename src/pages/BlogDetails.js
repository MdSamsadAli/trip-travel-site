import React from "react";
import Heading from "../common/Heading";

const BlogDetails = () => {
  return (
    <div>
      <Heading
        banner={
          <img
            src="./images/hero-banner.png"
            alt="img"
            className="w-full h-full object-cover"
          />
        }
        title={"Blog Details"}
        to={"Home"}
        current={"Blog Details"}
      />
    </div>
  );
};

export default BlogDetails;
