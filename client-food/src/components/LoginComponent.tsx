import React from "react";

export const LoginComponent = () => {
  return (
    <div className="pt-[168px] w-[440px]  m-auto p-8">
      <div className="flex justify-center text-3xl font-bold mb-12">
        Нэвтрэх
      </div>
      <form action="">
        <label htmlFor="" className="text-sm font-normal">
          Имэйл
        </label>
        <br />
        <input
          type="text"
          className="border w-full h-[48px] rounded mb-4 placeholder:text-xs px-4"
          placeholder="Имэйл хаягаа оруулна уу"
        />
        <br />
        <label htmlFor="" className="text-sm font-normal">
          Нууц үг
        </label>
        <br />
        <input
          type="text"
          className="border w-full h-[48px] rounded placeholder:text-xs px-4"
          placeholder="Нууц үгээ оруулна уу"
        />
        <br />
        <input
          type="button"
          value="Нууц үг сэргээх"
          className="w-full flex justify-end text-sm font-normal text-gray-400 mb-12"
        />
        <br />
        <div className="flex flex-col items-center gap-8 text-sm font-normal">
          <input
            type="submit"
            value="Нэвтрэх"
            className="border bg-[#EEEFF2] h-[48px] w-full text-[#1C20243D] rounded"
          />
          <p className="text-[#3F4145]">Эсвэл</p>
          <input
            type="submit"
            value="Бүртгүүлэх"
            className="border border-[#18BA51] h-[48px] w-full text-[#272727] rounded mb-[107px]"
          />
        </div>
      </form>
    </div>
  );
};
