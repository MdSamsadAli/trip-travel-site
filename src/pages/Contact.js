import React from "react";
import Heading from "../common/Heading";

const Contact = () => {
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
        title={"Contact Us"}
        to={"Home"}
        current={"Contact Us"}
      />
    </div>
  );
};

export default Contact;
