import React from "react";
import { useFormik } from "formik";

export const SignUpComponent = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      address: "",
      password: "",
      rePassword: "",
    },
    onSubmit: (values) => {
      alert();
      console.log(values);
    },
  });
  console.log(formik.values.firstName, "Name");
  return (
    <div className="pt-[168px] w-[440px]  m-auto p-8">
      <div className="flex justify-center text-3xl font-bold mb-12">
        Бүртгүүлэх
      </div>
      <form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="" className="text-sm font-normal">
          Нэр
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="border w-full h-[48px] rounded mb-4 placeholder:text-xs px-4"
          placeholder="Нэрээ оруулна уу"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
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
          Хаяг
        </label>
        <input
          type="text"
          className="border w-full h-[48px] rounded mb-4 placeholder:text-xs px-4"
          placeholder="Та хаягаа оруулна уу"
        />
        <label htmlFor="" className="text-sm font-normal">
          Нууц үг
        </label>
        <br />
        <input
          type="text"
          className="border w-full h-[48px] rounded placeholder:text-xs px-4 mb-4"
          placeholder="Нууц үгээ оруулна уу"
        />
        <br />
        <label htmlFor="" className="text-sm font-normal">
          Нууц үг давтах
        </label>
        <br />
        <input
          type="text"
          className="border w-full h-[48px] rounded placeholder:text-xs px-4 mb-12"
          placeholder="Нууц үгээ оруулна уу"
        />
        <br />
        <input type="checkbox" name="" id="" className="mb-8 mr-4" />
        <span className="">Үйлчилгээний нөхцөл зөвшөөрөх</span>
        <br />
        <button
          type="submit"
          className="border w-full h-12 mb-[139px] bg-[#EEEFF2] text-[#1C20243D] rounded"
        >
          Бүртгүүлэх
        </button>
      </form>
    </div>
  );
};
