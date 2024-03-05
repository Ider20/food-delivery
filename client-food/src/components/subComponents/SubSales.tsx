import React, { useEffect, useState } from "react";

type SubSales = {
  image: string;
  title: string;
  price: number;
  preprice?: number | undefined;
  sales: boolean;
};
export const SubSales = ({
  image,
  title,
  price,
  preprice,
  sales,
}: SubSales) => {
  //   const [sales, setSales] = useState(false);

  return (
    <div className="hover:scale-[1.02] duration-200 cursor-pointer mb-[96px]">
      <img src={image} alt="" className="w-[282px] h-[186px] relative z-0" />
      <div className="absolute top-1 z-50 text-white">20%</div>
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
