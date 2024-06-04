import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="bg-gray-50 newsletter px-8 py-12">
        <h4 className="text-xl font-semibold relative inline">Newsletter</h4>
        <div className="my-4">
          <input
            type="text"
            placeholder="Enter email"
            className=" px-2 py-3 focus:outline-none w-full border"
          />
        </div>
        <div>
          <button className="bg-black flex items-center gap-2 text-orange-500 px-10 py-3 w-full">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
