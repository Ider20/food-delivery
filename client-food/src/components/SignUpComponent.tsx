import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { errors } from "undici-types";
import axios from "axios";

export const SignUpComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      password: "",
      rePassword: "",
      check: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "15 тэмдэгтээс дээшгүй байна")
        .required("Зайлшгүй бөглөнө"),
      email: Yup.string()
        .email("Буруу имэйл хаяг байна")
        .required("Зайлшгүй бөглөнө"),
      address: Yup.string()
        .max(30, "30 тэмдэгтээс дээшгүй байна")
        .required("Зайлшгүй бөглөнө"),
      password: Yup.string()
        .min(8, "8 тэмдэгтээс доошгүй байна")
        .required("Зайлшгүй бөглөнө"),
      rePassword: Yup.string().oneOf(
        [Yup.ref("password"), undefined],
        '"Нууц үг"-тэй ямагт таарах ёстой'
      ),
      check: Yup.bool().oneOf(
        [true],
        "Та үйлчилгээний нөхцөл зөвшөөрөөгүй байна"
      ),
    }),
    onSubmit: async (values) => {
      // console.log(values);
      try {
        const userData = {
          name: values.name,
          email: values.email,
          address: values.address,
          password: values.password,
        };
        const response = await axios.post(
          "http://localhost:8080/signup",
          userData
        );
        console.log(response, "response");
      } catch (error) {
        console.error(error);
      }
    },
  });

  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post("http:localhost:8080/signup");
  //   } catch (error) {}
  // };

  // console.log(formik.values.firstName, "Name");
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
          id="name"
          name="name"
          type="text"
          className="border w-full h-[48px] rounded placeholder:text-xs px-4"
          placeholder="Нэрээ оруулна уу"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <div className="text-red-500 mb-4 text-xs">
          {formik.touched.name && formik.errors.name ? (
            <p>{formik.errors.name}</p>
          ) : null}
        </div>

        <label htmlFor="" className="text-sm font-normal">
          Имэйл
        </label>
        <br />
        <input
          id="email"
          name="email"
          type="text"
          className="border w-full h-[48px] rounded placeholder:text-xs px-4"
          placeholder="Имэйл хаягаа оруулна уу"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <div className="text-red-500 text-xs">
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </div>
        <br />
        <label htmlFor="" className="text-sm font-normal">
          Хаяг
        </label>
        <input
          id="address"
          name="address"
          type="text"
          className="border w-full h-[48px] rounded placeholder:text-xs px-4"
          placeholder="Та хаягаа оруулна уу"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        <div className="text-red-500 mb-4 text-xs">
          {formik.touched.address && formik.errors.address ? (
            <p>{formik.errors.address}</p>
          ) : null}
        </div>
        <label htmlFor="" className="text-sm font-normal">
          Нууц үг
        </label>
        <br />
        <input
          id="password"
          name="password"
          type="text"
          className="border w-full h-[48px] rounded placeholder:text-xs px-4"
          placeholder="Нууц үгээ оруулна уу"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div className="text-red-500 text-xs mb-4">
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
        </div>
        <br />
        <label htmlFor="" className="text-sm font-normal">
          Нууц үг давтах
        </label>
        <br />
        <input
          id="rePassword"
          name="rePassword"
          type="text"
          className="border w-full h-[48px] rounded placeholder:text-xs px-4"
          placeholder="Нууц үгээ оруулна уу"
          onChange={formik.handleChange}
          value={formik.values.rePassword}
        />
        <div className="text-red-500 mb-12 text-xs">
          {formik.touched.rePassword && formik.errors.rePassword ? (
            <p>{formik.errors.rePassword}</p>
          ) : null}
        </div>
        <br />
        <input
          type="checkbox"
          name="check"
          id="check"
          className="mb-8 mr-4"
          onChange={formik.handleChange}
        />
        <span className="">Үйлчилгээний нөхцөл зөвшөөрөх</span>
        <div className="text-red-500 text-xs">
          {formik.touched.check && formik.errors.check ? (
            <p>{formik.errors.check}</p>
          ) : null}
        </div>
        <br />
        <button
          type="submit"
          disabled={!formik.isValid}
          className={`border w-full h-12 mb-[139px]  rounded ${
            formik.isValid
              ? "bg-[#18BA51] text-white hover:scale-[1.02] duration-200 active:scale-[0.98]"
              : "bg-[#EEEFF2] text-[#1C20243D]"
          }`}
        >
          Бүртгүүлэх
        </button>
      </form>
    </div>
  );
};
