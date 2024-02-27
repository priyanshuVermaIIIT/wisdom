import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between">
        <div className=" text-3xl mt-6 mr-4 ml-10 text-amber-900">
          <h2>
            divine<span className="font-bold">Wisdom</span>
          </h2>
        </div>
        <div className="flex justify-start items-center mt-6 w-[30%]">
          <button className="mr-2">
            <img src="search-custom.svg" width="25px " />
          </button>
          <input
            type="text"
            placeholder="Search quote,book,author.."
            className="mr-2 w-[100%] pl-3 rounded-lg search-input placeholder-amber-900 text-xl"
          />
        </div>
        <ul className="flex justify-end mt-5 ">
          <li className="flex flex-col justify-start items-center mx-8">
            <img src="house-fill-custom.svg" alt="" width="25px" />
            <a href="/home">Home</a>
          </li>
          <li className="flex flex-col justify-start items-center mx-8">
            <img src="chat.svg" alt="" width="25px" />
            <a href="/quoteShelf">QuoteShelf</a>
          </li>
          <li className="flex flex-col justify-start items-center mx-8">
            <img src="browse.svg" alt="" width="25px" />
            <a href="/browse">Browse</a>
          </li>
          <li className="flex flex-col justify-start items-center mx-8">
            <img src="search2.svg" alt="" width="25px" />
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
