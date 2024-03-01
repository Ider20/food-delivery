import React from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-[#18BA51]">
      <div className="w-[1440px] h-[545px] bg-watermark m-auto py-[114px]">
        <div className="w-[1200px] flex flex-col gap-10 m-auto">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/assets/logo/whitelogo.png"
              alt=""
              className="w-[31px] h-[26px]"
            />
            <p className="text-2xl font-bold text-white">Food Delivery</p>
          </div>
          <ul className="flex text-white font-[590] justify-between">
            <li className="border-b-2 hover:scale-105 duration-200 cursor-pointer">
              Нүүр
            </li>
            <li className="border-b-2 hover:scale-105 duration-200 cursor-pointer">
              Холбоо барих
            </li>
            <li className="border-b-2 hover:scale-105 duration-200 cursor-pointer">
              Хоолны цэс
            </li>
            <li className="border-b-2 hover:scale-105 duration-200 cursor-pointer">
              Үйлчилгээний нөхцөл
            </li>
            <li className="border-b-2 hover:scale-105 duration-200 cursor-pointer">
              Хүргэлтийн бүс
            </li>
            <li className="border-b-2 hover:scale-105 duration-200 cursor-pointer">
              Нууцлалын бодлого
            </li>
          </ul>
          <div className="flex justify-center gap-[18px] mb-10">
            <img src="/assets/icon/facebook.png" alt="" className="w-9" />
            <img src="/assets/icon/instagram.png" alt="" className="w-9" />
            <img src="/assets/icon/twitter.png" alt="" className="w-9" />
          </div>
        </div>
        <hr className="w-[1200px] m-auto mb-10" />
        <div className="text-white w-[1200px] m-auto flex flex-col items-center">
          <p>© 2024 Pinecone Foods LLC </p>
          <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </div>
  );
};
