import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-200 ">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-2xl font-serif">Book World</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li ><Link className="text-lg font-semibold" href="/">Home</Link></li>
        <li ><Link className="text-lg font-semibold" href="about">About</Link></li>
        <li ><Link className="text-lg font-semibold" href="booking">Booking</Link></li>
        <li ><Link className="text-lg font-semibold" href="product">Product</Link></li>
        <li ><Link className="text-lg font-semibold" href="contact">Contact</Link></li>
        
       
      </ul>
    </div>
  </div>
  );
};

export default NavBar;
