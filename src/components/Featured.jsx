import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

function Featured() {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  const [currenIndex, SetCurrentIndex] = useState(0);

  //image slider function

  const leftClick = () => {
    const newIndex = currenIndex === 0;
    const newValue = newIndex ? sliders.length - 1 : currenIndex - 1;
    SetCurrentIndex(newValue);
  };

  const RightClick = () => {
    const newIndex = currenIndex === sliders.length - 1;
    const newValue = newIndex ? 0 : currenIndex + 1;
    SetCurrentIndex(newValue);
  };

  const moveNextSlide = (slideIndex) => {
    SetCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currenIndex].url})` }}
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <AiOutlineLeft onClick={leftClick} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <AiOutlineRight onClick={RightClick} />
      </div>
      <div className="flex justify-center py-1">
        {sliders.map((pci, index) => {
          return (
            <div
              className="cursor-pointer"
              key={index}
              onClick={() => moveNextSlide(index)}
            >
              <RxDotFilled size={20} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Featured;
