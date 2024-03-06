import React, { useState } from "react";
import { LoginModal } from "../components/LoginModal";
import Link from "next/link";

export const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState(true);

  const handleLoginModal = () => {
    setShowModal(!showModal);
  };

  const valueSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setSearchValue(false);
    } else {
      setSearchValue(true);
    }
  };

  return (
    <div className="w-full fixed z-20 bg-white">
      <div>
        {showModal && (
          <LoginModal showModal={showModal} setShowModal={setShowModal} />
        )}
      </div>
      <div className="w-[1440px] m-auto">
        <div className="w-[1440px] h-[57px] bg-white flex justify-between items-center px-[91px]">
          <div className="flex items-center gap-2 font-bold text-sm">
            <img
              src="/assets/logo/mainlogo.png"
              alt=""
              className="mr-4 w-[30px] h-[30px]"
            />
            <Link href={"http://localhost:3000"}>
              {" "}
              <p className="px-4 py-1 hover:text-[#18BA51] hover:mb-1 duration-200 cursor-pointer">
                НҮҮР
              </p>
            </Link>

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
              className={`border rounded-md w-[260px] h-10 font-normal ${
                searchValue
                  ? "px-2 pl-10 bg-scope bg-no-repeat bg-left"
                  : "px-2 pl-1"
              } mr-5`}
              placeholder={`Хайх`}
              onChange={valueSearch}
            />
            <div className="flex items-center px-2">
              <img src="/assets/basket.png" alt="" className="w-[17px]" />
              <p className="px-2 py-1 hover:text-[#18BA51] duration-200 cursor-pointer">
                Сагс
              </p>
            </div>
            <div className="flex items-center px-2">
              <img src="/assets/avatar.png" alt="" className="w-[17px]" />
              <button
                className="px-2 py-1 hover:text-[#18BA51] duration-200 cursor-pointer"
                onClick={handleLoginModal}
              >
                Нэвтрэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
