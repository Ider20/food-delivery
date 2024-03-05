import React, { useEffect, useState } from "react";

type SubSales = {
  image: string;
  title: string;
  price: number;
  preprice?: number | undefined;
  sales: boolean;
  discount?: number;
};
export const SubSales = ({
  image,
  title,
  price,
  preprice,
  sales,
  discount,
}: SubSales) => {
  //   const [sales, setSales] = useState(false);
  // console.log(sales);
  return (
    <div className="group hover:scale-[1.02] duration-200 cursor-pointer mb-[96px]">
      {sales && (
        <div className="absolute ml-[190px] mt-[15px] z-10 text-white text-lg font-bold border border-white bg-[#18BA51] px-3 rounded-full group-hover:scale-125 duration-200">
          {discount}%
        </div>
      )}
      <img src={image} alt="" className="w-[282px] h-[186px] relative z-0" />

      <p className="text-lg font-semibold px-2">{title}</p>
      <div className="flex gap-4 items-center px-2">
        <p className="text-[#18BA51] font-semibold text-lg">{price}₮</p>
        {sales && (
          <p className="text-[#272727] line-through font-normal">
            {" "}
            {preprice}₮
          </p>
        )}
      </div>
    </div>
  );
};

export default SubSales;
