import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { instagramfeed } from "../data/Data";

const Footer = () => {
  return (
    <>
      <div className="footer mt-16 bg-gray-950">
        <div className="w-10/12 m-auto py-16">
          <div className="lg:flex gap-8">
            <div className="w-1/4 w-fullscreen768">
              <h3 className="text-xl font-bold mb-8 text-white">About Us</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae ducimus officia ipsam quibusdam, ipsa totam corporis
                tempora vel nemo! Sequi ducimus laudantium hic quo modi at!
                Atque, similique. Vero, distinctio.
              </p>
            </div>

            <div className="w-1/4 w-fullscreen768">
              <h3 className="text-xl font-bold mb-8 text-white">Newsletter</h3>
              <p className="text-gray-600 mb-4">Stay Update with our latest </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter email"
                  className="w-full py-2 px-2 focus:outline-none"
                />
                <div className="bg-orange-500 absolute right-0 top-0 h-full grid place-items-center px-3">
                  <GrLinkNext />
                </div>
              </div>
            </div>

            <div className="w-1/4 w-fullscreen768">
              <div>
                <h3 className="text-xl font-bold mb-8 text-white">
                  Instagram Feed
                </h3>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {instagramfeed.map((val, i) => (
                  <div key={i} className="h-14 overflow-hidden">
                    <img
                      src={val.img}
                      alt="img"
                      className="w-full h-full object-cover hover:scale-125 transition-all ease-in-out duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-1/4 w-fullscreen768">
              <h3 className="text-xl font-bold mb-8 text-white">Follow Us</h3>
              <p className="text-gray-600">Lets be Social</p>
              <div className="flex mt-4 gap-4">
                <div className="text-gray-400 hover:rotate-180 transition-all ease-in-out duration-300">
                  <FaFacebook />
                </div>
                <div className="text-gray-400 hover:rotate-180 transition-all ease-in-out duration-300">
                  <FaInstagram />
                </div>
                <div className="text-gray-400 hover:rotate-180 transition-all ease-in-out duration-300">
                  <FaLinkedin />
                </div>
                <div className="text-gray-400 hover:rotate-180 transition-all ease-in-out duration-300">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-base text-gray-400">
              Copyright &copy; 2024 All rights reserved. Made By{" "}
              <Link className="font-bold text-white hover:text-orange-600">
                Shamskhus
              </Link>
              <div className="mt-4">
                <Link className="hover:text-orange-600">Terms & Conditons</Link>
                {" / "}
                <Link className="hover:text-orange-600">Privacy & Policy</Link>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
