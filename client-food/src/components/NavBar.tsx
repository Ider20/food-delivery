import React from "react";

export const NavBar = () => {
  return (
    <div className="w-full fixed bg-white">
      <div className="w-[1440px] m-auto">
        <div className="w-[1440px] h-[57px] bg-white flex justify-between items-center px-[91px]">
          <div className="flex items-center gap-2 font-bold text-sm">
            <img
              src="/assets/logo/mainlogo.png"
              alt=""
              className="mr-4 w-[30px] h-[30px]"
            />
            <p className="px-4 py-1 hover:text-[#18BA51] hover:mb-1 duration-200 cursor-pointer">
              НҮҮР
            </p>
            <p className="px-4 py-1 hover:text-[#18BA51] hover:mb-1 duration-200 cursor-pointer">
              ХООЛНЫ ЦЭС
            </p>
            <p className="px-4 py-1 hover:text-[#18BA51] hover:mb-1 duration-200 cursor-pointer">
              ХҮРГЭЛТИЙН БҮС
            </p>
          </div>
          <div className="flex items-center text-sm font-semibold">
            <input
              type="searchbox"
              className="border rounded-md w-[260px] h-10 px-2 font-normal mr-5"
              placeholder="Хайх"
            />
            <div className="flex items-center px-2">
              <img src="/assets/basket.png" alt="" className="w-[17px]" />
              <p className="px-2 py-1 hover:text-[#18BA51] duration-200 cursor-pointer">
                Сагс
              </p>
            </div>
            <div className="flex items-center px-2">
              <img src="/assets/avatar.png" alt="" className="w-[17px]" />
              <p className="px-2 py-1 hover:text-[#18BA51] duration-200 cursor-pointer">
                Нэвтрэх
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
