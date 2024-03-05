import React, { useState } from "react";
import { SubSales } from "../components/subComponents/SubSales";

export const Salads = () => {
  const [sales, setSales] = useState(false);

  return (
    <div>
      <div className="flex items-center w-[1200px] m-auto justify-between px-3 mb-[42px]">
        <div className="flex items-center">
          <img src="/assets/icon/star.png" alt="" className="w-4 h-4" />
          <p className="text-[22px] font-bold"> Салад ба зууш</p>
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
          image={"/assets/чихэрлэгтахиа.png"}
          title={"Чихэрлэг тахиа"}
          price={34800}
          sales={sales}
        />
        <SubSales
          image={"/assets/lunch.png"}
          title={"Lunch"}
          price={22800}
          sales={sales}
        />
        <SubSales
          image={"/assets/сэндвич.png"}
          title={"Сэндич"}
          price={14800}
          sales={sales}
        />
        <SubSales
          image={"/assets/applepie.png"}
          title={"Apple pie"}
          price={17800}
          sales={sales}
        />
      </div>
    </div>
  );
};
