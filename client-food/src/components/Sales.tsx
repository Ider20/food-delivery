import React, { useState } from "react";
import { SubSales } from "../components/subComponents/SubSales";

export const Sales = () => {
  const [sales, setSales] = useState(true);

  return (
    <div>
      <div className="flex items-center w-[1200px] m-auto justify-between px-3 mb-[42px]">
        <div className="flex items-center">
          <img src="/assets/icon/star.png" alt="" className="w-4 h-4" />
          <p className="text-[22px] font-bold"> Хямдралтай</p>
        </div>

        <div className="group flex items-center gap-4 hover:scale-105 duration-200 cursor-pointer">
          <p className="text-sm text-[#18BA51] group-hover:text-gray-400 duration-200 ">
            Бүгдийг харах
          </p>
          <img src="/assets/icon/arrow.png" alt="" className="w-[6px]" />
        </div>
      </div>
      <div className="flex m-auto w-[1200px] justify-between">
        <SubSales
          image={"/assets/egg.png"}
          title={"Өглөөний хоол"}
          price={14800}
          preprice={16800}
          sales={sales}
        />
        <SubSales
          image={"/assets/icecream.png"}
          title={"Зайрмаг"}
          price={4800}
          preprice={6800}
          sales={sales}
        />
        <SubSales
          image={"/assets/richyoghurt.png"}
          title={"Өглөөний хоол"}
          price={24800}
          preprice={26800}
          sales={sales}
        />
        <SubSales
          image={"/assets/breakfast.png"}
          title={"Breakfast "}
          price={24800}
          preprice={26800}
          sales={sales}
        />
      </div>
    </div>
  );
};

export default Sales;
