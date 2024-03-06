import React, { Dispatch } from "react";
// import { LoginComponent } from "../components/LoginComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

type LoginModal = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginModal = ({ showModal, setShowModal }: LoginModal) => {
  const closeModal = (e: React.MouseEvent<HTMLInputElement>) => {
    if ((e.target as HTMLElement).classList.contains("bg-back-color")) {
      setShowModal(false);
    }
    // console.log(e.target.classList.contains("bg-back-color"));
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={`w-full h-full bg-back-color fixed`} onClick={closeModal}>
      {/* <LoginComponent /> */}
      <div className="w-[440px] h-[590px] bg-white p-8 rounded-2xl m-auto mt-16">
        <div className="flex justify-center text-3xl font-bold mb-12">
          Нэвтрэх
        </div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="" className="text-sm font-normal">
            Имэйл
          </label>
          <br />
          <input
            id="email"
            name="email"
            type="text"
            className="border w-full h-[48px] rounded mb-4 placeholder:text-xs px-4"
            placeholder="Имэйл хаягаа оруулна уу"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <br />
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
          <br />
          <input
            type="button"
            value="Нууц үг сэргээх"
            className="w-full flex justify-end text-sm font-normal text-gray-400 mb-12"
          />
          <br />
          <div className="flex flex-col items-center gap-8 text-sm font-normal mb-8">
            <button
              type="submit"
              className="border bg-[#EEEFF2] h-[48px] w-full text-[#1C20243D] rounded"
            >
              Нэвтрэх
            </button>
            <p className="text-[#3F4145]">Эсвэл</p>
          </div>
        </form>
        <Link href={"http://localhost:3000/signup"}>
          {" "}
          <button
            className="border border-[#18BA51] h-[48px] w-full text-[#272727] rounded"
            onClick={handleClose}
          >
            Бүртгүүлэх
          </button>
        </Link>
      </div>
    </div>
  );
};
