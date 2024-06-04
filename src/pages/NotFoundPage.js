import React from "react";
import Heading from "../common/Heading";

const NotFoundPage = () => {
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
        title={"Not Found Page"}
        to={"Home"}
        current={"Not Found Page Page"}
      />
    </div>
  );
};

export default NotFoundPage;
