import { link } from "fs";
import Link from "next/link";
import React, { useState } from "react";
import Login from "../../pages/login";
import Button from "../formui/button";
import Search from "./search";

const Links = [
  { name: "Discover", url: "/discover" },
  { name: "About", url: "/about" },
  { name: "Shop", url: "/shop" },
];

const Header = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 text-primary bg-bg md:pb-0 pb-4">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl  flex items-center">
          <Link href="/">
            <a>Linze</a>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-10 top-6 md:hidden "
        >
          <img
            src={open ? "icons/close.svg" : "icons/menu.svg"}
            alt=""
            width={23}
            height={23}
            className=" cursor-pointer"
          />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-bg md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => {
            return (
              <li key={link.name} className="md:ml-14 md:my-0 my-7">
                <Link href={link.url}>
                  <a
                    className=" cursor-pointer hover:text-alternative duration-500 text-2xl"
                    onClick={() => setOpen(!open)}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            );
          })}
          <div className="md:ml-8 md:pt-0 pt-4">
            <Button text="Login" link="/login" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
