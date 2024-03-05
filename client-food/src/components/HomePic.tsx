import React from "react";

export const HomePic = () => {
  return (
    <div>
      <div className="h-[57px]"></div>
      <div className="w-100 bg-[#18BA51]">
        <div className="w-[1440px] h-[788px] m-auto bg-watermark">
          <div className="w-[1250px] h-[788px] m-auto flex items-center justify-between">
            <div className="w-[384px]">
              <div className="text-[62px] font-bold text-white shadow-inner-lg leading-none mb-[23px]">
                Pinecone
                <br /> Food delivery
              </div>
              <hr className="w-[384px] mb-[23px]" />
              <div className=" text-white text-[27px]">
                Horem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit.
              </div>
            </div>
            <div className="">
              <img
                src="/assets/hool01.png"
                alt=""
                className="w-[443px] absolute"
              />
              <img
                src="/assets/hool02.png"
                alt=""
                className="w-[313px] relative ml-[280px] mt-[110px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePic;
