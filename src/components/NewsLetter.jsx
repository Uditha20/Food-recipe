import React from "react";

function NewsLetter() {
  return (
    <div className="max-w-[1520px] m-auto h-[200px]  text-white px-4 bg-[#24262b]">
      <div className="mx-auto grid lg:grid-cols-3">
        <div className="flex flex-col justify-center lg:col-span-2 my-4">
          <h1>Need advice on how to improve your flow</h1>
          <p>sign up to join our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row  items-center justify-between w-full ">
            <input
              type="email"
              placeholder="email"
              className="p-3 rounded-md w-full text-black"
            />
            <button className="rounded-md text-white bg-[#00df9a] w-[200px] ml-4 my-6 px-6 py-3 border-none">
              Notify
            </button>
          </div>
          <p>
            We are concerned about the security of your data,Read {""}
            <span className="text-[#00df9a]">privacy policy</span>
          </p>
        </div>
        <hr className="my-8 bg-gray-700 border-1"/>
      </div>
    </div>
  );
}

export default NewsLetter;
