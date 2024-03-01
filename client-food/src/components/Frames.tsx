import React from "react";

type FramesProps = {
  icon: string;
  title: string;
  description: string;
};

export const Frames = ({ icon, title, description }: FramesProps) => {
  return (
    <div className="w-[265px] h-[155px] border rounded-2xl shadow-lg m-4 p-4 hover:scale-105 duration-200 cursor-pointer">
      <img src={icon} alt="" className="p-[15px] mb-[15px] w-[55px]" />
      <p className="text-lg font-bold">{title}</p>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default Frames;
