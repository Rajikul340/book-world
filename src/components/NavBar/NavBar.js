import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-200 ">
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost text-lg normal-case md:text-2xl font-serif"
        >
          Book World
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="md:text-lg font-semibold" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="md:text-lg font-semibold" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="md:text-lg font-semibold" href="/booking">
              Booking
            </Link>
          </li>
          <li>
            <Link className="md:text-lg font-semibold" href="/product">
              Product
            </Link>
          </li>
          <li>
            <Link className="md:text-lg font-semibold" href="/contact">
              Contact
            </Link>
          </li>
          <div className="form-control">
          
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
