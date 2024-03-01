import React, { useEffect, useState } from "react";

type SubSales = {
  image: string;
  title: string;
  price: number;
  preprice?: number | undefined;
};
export const SubSales = ({ image, title, price, preprice }: SubSales) => {
  const [sales, setSales] = useState(false);

  return (
    <div className="hover:scale-105 duration-200 cursor-pointer mb-[96px]">
      <img src={image} alt="" className="w-[282px] h-[186px]" />
      <p className="text-lg font-semibold px-2">{title}</p>
      <div className="flex gap-4 items-center px-2">
        <p className="text-[#18BA51] font-semibold text-lg">{price}₮</p>
        <p className="text-[#272727] line-through font-normal"> {preprice}₮</p>
      </div>
    </div>
  );
};

export default SubSales;
