import React from "react";

type SubMainDishes = {
  image: string;
  title: string;
  price: number;
};
export const SubMainDishes = ({ image, title, price }: SubMainDishes) => {
  return (
    <div className="hover:scale-105 duration-200 cursor-pointer mb-[96px]">
      <img src={image} alt="" className="w-[282px] h-[186px]" />
      <p className="text-lg font-semibold px-2">{title}</p>
      <div className="flex gap-4 items-center px-2">
        <p className="text-[#18BA51] font-semibold text-lg">{price}₮</p>
      </div>
    </div>
  );
};

export default SubMainDishes;
