import React from "react";
import { SubSales } from "../components/subComponents/SubSales";

export const Desert = () => {
  const array = [
    { image: "/assets/oryoshake.png", title: "Oreo shake", price: 22800 },
  ];

  return (
    <div>
      <div className="flex items-center w-[1200px] m-auto justify-between px-3 mb-[42px]">
        <div className="flex items-center">
          <img src="/assets/icon/star.png" alt="" className="w-4 h-4" />
          <p className="text-[22px] font-bold"> Амттан</p>
        </div>

        <div className="group flex items-center gap-4 hover:scale-105 duration-200 cursor-pointer">
          <p className="text-sm text-[#18BA51] group-hover:text-gray-400 duration-200 ">
            Бүгдийг харах
          </p>
          <img src="/assets/icon/arrow.png" alt="" className="w-[6px]" />
        </div>
      </div>
      <div className="flex m-auto w-[1200px] justify-between">
        <SubSales image={"/assets/торт.png"} title={"Торт"} price={34800} />
        <SubSales
          image={array[0].image}
          title={array[0].title}
          price={array[0].price}
        />
        <SubSales
          image={"/assets/chocolate.png"}
          title={"Chocolate"}
          price={14800}
        />
        <SubSales
          image={"/assets/yoghurt.png"}
          title={"Yoghurt"}
          price={17800}
        />
      </div>
    </div>
  );
};
