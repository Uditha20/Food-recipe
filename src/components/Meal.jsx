import React, { useState } from "react";
import { mealData } from "../data/data";
import { AiOutlineArrowRight } from "react-icons/ai";

function Meal() {
  const [foods,setFoods]=useState(mealData)
  const filterCat=(category)=>{
    setFoods(
      mealData.filter((item)=>{
          return item.category===category
      })
    )
  }
  return (
    <div className="max-w-[1520px] m-auto px-4 my-12">
      <h1 className="text-orange-500 font-bold text-center text-2xl ">
        Our Meals
      </h1>
      <div className="flex flex-col lg:flex-row justify-center mt-4">
        <div className="flex justify-center md:justify-center">
          <button onClick={()=>setFoods(mealData)} className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">All</button>
          <button onClick={()=>filterCat('pizza')} className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">Pizza</button>
          <button onClick={()=>filterCat('chiken')} className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">Chiken</button>
          <button onClick={()=>filterCat('salad')}className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">Salad</button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 mt-10">
        {foods.map((item) => {
          return (
            <div
              className="border-none hover:scale-105 duration-300"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <div className="flex justify-between py-2 px-4">
                <p className="font-bold">{item.name}</p>
                <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold">
                  {item.price}
                </p>
              </div>
              <div className="pl-2 py-4 -mt-7 mx-2">
                <p className="flex items-center">
                  view more{" "}
                  <AiOutlineArrowRight size={20} className="ml-2 mt-1" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Meal;
