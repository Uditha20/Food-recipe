import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";

function TopNav() {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu
            size={25}
            onClick={() => {
              setSideNav(!sideNav);
            }}
          />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl px-2 mx-4">
          Yum<span>Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 mx-4 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-1 font-bold">
            Free
          </p>
          <p className="p-1  font-bold">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          className="bg-transparent p-2 w-full focus:outline-none text-center"
          placeholder="search meals"
        />
      </div>
      <button className="bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full">
        <span className="px-2">
          <AiOutlineShoppingCart size={25} />
        </span>{" "}
        Cart
      </button>
      {sideNav ? (
        <div className="bg-black/60 fixed w-full h-screen z-10 inset-0">
          <div className="fixed top-0 left-0 w-[300px] h-screen bg-white z-10 ease-in-out duration-700">
            <AiOutlineClose
              size={25}
              className="absolute top-0 right-0  m-4 cursor-pointer "
              onClick={() => {
                setSideNav(!sideNav);
              }}
            />
            <h2 className="font-bold text-xl p-4 px-3">
              Yum <span className="text-orange-700 font-bold">Eats</span>
            </h2>
            <div>
              <nav >
                <ul className="flex flex-col p-4 text-gray-900">
                  <li className="py-4 flex text-xl"><AiOutlineClose className="mr-3" size={25}/>My account</li>
                  <li className="py-4 flex text-xl"><AiOutlineClose className="mr-3" size={25}/>Delivery</li>
                  <li className="py-4 flex text-xl"><AiOutlineClose className="mr-3" size={25}/>My Favourite</li>
                  <li className="py-4 flex text-xl"><AiOutlineClose className="mr-3" size={25}/>My Wallet</li>
                  <li className="py-4 flex text-xl"><AiOutlineClose className="mr-3" size={25}/>Help</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 ease-in-out duration-700"></div>
      )}
    </div>
  );
}

export default TopNav;
