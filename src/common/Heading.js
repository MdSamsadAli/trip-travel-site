import React from "react";
import { Link } from "react-router-dom";

const Heading = ({ banner, title, to, current }) => {
  return (
    <>
      <div className="w-10/12 m-auto">
        <div className="relative">
          <div className="h-96">{banner}</div>
          <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <h1 className="text-4xl font-bold">{title}</h1>
            <Link to={"/"}>{to}</Link> - <span>{current}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
