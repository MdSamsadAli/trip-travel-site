import React from "react";
import { category } from "../data/Data";

const Category = () => {
  return (
    <div>
      <div className="bg-gray-50 newsletter px-8 py-12 mt-8">
        <h4 className="text-xl font-semibold relative inline">Category</h4>
        <div>
          {category.map((val, i) => (
            <div
              key={i}
              className="bg-white my-4 p-4 hover:text-orange-500 hover:shadow-md cursor-pointer text-gray-400 capitalize transition-all ease-in-out duration-300"
            >
              <div className="flex justify-between">
                <p>{val.category_name}</p>
                <p>({val.cate_count})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
