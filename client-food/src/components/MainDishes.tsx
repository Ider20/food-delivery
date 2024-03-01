import React from "react";
import { SubMainDishes } from "../components/subComponents/SubMainDishes";

export const MainDishes = () => {
  return (
    <div>
      <div className="flex items-center w-[1200px] m-auto justify-between px-3 mb-[42px]">
        <div className="flex items-center">
          <img src="/assets/icon/star.png" alt="" className="w-4 h-4" />
          <p className="text-[22px] font-bold"> Үндсэн хоол</p>
        </div>

        <div className="group flex items-center gap-4 hover:scale-105 duration-200 cursor-pointer">
          <p className="text-sm text-[#18BA51] group-hover:text-gray-400 duration-200 ">
            Бүгдийг харах
          </p>
          <img src="/assets/icon/arrow.png" alt="" className="w-[6px]" />
        </div>
      </div>
      <div className="flex m-auto w-[1200px] justify-between">
        <SubMainDishes
          image={"/assets/mainpizza.png"}
          title={"Main Pizza"}
          price={34800}
        />
        <SubMainDishes
          image={"/assets/foodtart.png"}
          title={"Food tart"}
          price={22800}
        />
        <SubMainDishes
          image={"/assets/өглөөнийцай.png"}
          title={"Өглөөний хоол"}
          price={14800}
        />
        <SubMainDishes
          image={"/assets/зутаншөл.png"}
          title={"Зутан шөл"}
          price={17800}
        />
      </div>
    </div>
  );
};

export default MainDishes;
