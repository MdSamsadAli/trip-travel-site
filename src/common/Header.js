import React, { useEffect, useState } from "react";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { navbar } from "../data/Data";
import { Link } from "react-router-dom";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [dropDownMenuOpen, setDropDownMenuOpen] = useState(false);
  const navbarOpen = () => {
    setToggleNav(!toggleNav);
  };

  const toggleDropdown = (index) => {
    setDropDownMenuOpen(dropDownMenuOpen === index ? null : index);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`header sticky top-0 bg-white z-10 py-6 ${
          isScrolled ? "shadow-md bg-gray-100" : ""
        }`}
      >
        <div className="w-10/12 m-auto">
          <div className="flex items-center justify-between">
            <div className="uppercase text-2xl font-semibold">
              <Link to={"/"}>Sensive</Link>
            </div>

            <div className="hidden capitalize font-semibold md:flex gap-4">
              {navbar.map((val, key) => (
                <div key={key} className="relative group">
                  {val.page ? (
                    <>
                      <div className="hover:text-red-500 flex items-center gap-2">
                        <Link to={val.path}>{val.nav}</Link>
                        <button>
                          <IoChevronDown />
                        </button>
                      </div>
                      <div className="absolute left-0 top-full w-max opacity-0 group-hover:opacity-100 group-hover:max-h-full transition-opacity transition-max-height duration-500 ease-in-out max-h-0 pt-4">
                        <ul>
                          {val.page.map((sublink) => (
                            <li
                              key={sublink.id}
                              className="px-5 py-3 bg-white shadow-md hover:text-red-500"
                            >
                              <Link to={sublink.path}>{sublink.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link className="hover:text-orange-500" to={val.path}>
                      {val.nav}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <BiLogoTwitter className="hover:text-red-300 hover:scale-125" />
              <BiLogoFacebook className="hover:text-red-300 hover:scale-125" />
              <BiLogoLinkedin className="hover:text-red-300 hover:scale-125" />
            </div>

            <div
              className="text-4xl hamburger md:hidden block"
              onClick={navbarOpen}
            >
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed w-1/5 top-0 h-full z-10 transform ${
          toggleNav ? "-translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out shadow-lg bg-white w-fullscreen768 `}
      >
        <div className="bg-white">
          <div className="absolute right-0 p-4" onClick={navbarOpen}>
            <FaTimes />
          </div>

          <ul className="p-4 mt-2">
            {navbar.map((link, i) => (
              <li className="my-2 hover:text-red-500 " key={i}>
                {link.page ? (
                  <>
                    <div
                      className="hover:text-red-500 flex items-center gap-2"
                      onClick={() => toggleDropdown(i)}
                    >
                      <Link to={link.path}>{link.nav}</Link>
                      <button>
                        {dropDownMenuOpen === i ? (
                          <IoChevronUp />
                        ) : (
                          <IoChevronDown />
                        )}
                      </button>
                    </div>

                    <div
                      className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                        dropDownMenuOpen === i ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <ul>
                        {link.page.map((sublink) => (
                          <li key={sublink.id} className="my-1">
                            <Link to={sublink.path}>{sublink.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link to={link.path}>{link.nav}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
