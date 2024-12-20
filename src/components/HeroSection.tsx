"use client";

import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import AppleLogo from "@/assets/png/Apple.png";
import GoogleLogo from "@/assets/png/google.png";
import LogoIcon from "@/assets/png/Logo.png";
import Image from "next/image";

const loginSchema = Yup.object({
  username: Yup.string().required("Wrong username"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Wrong password"),
});

const initialValues = {
  username: "",
  password: "",
};

const HeroSection = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        try {
          // Handle login logic here
          console.log("Form values:", values);
          action.resetForm();
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.log("error::", error.message);
          } else {
            console.log("error::", String(error));
          }
        }
      },
    });

  return (
    <div className="flex justify-center items-center px-4 sm:pt-16 pb-10 sm:pb-16">
      <div className="lg:container px-4 md:px-8  mx-auto flex-col md:flex-row items-center justify-center gap-8 md:gap-20 xl:gap-64 lg:flex hidden">
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:max-w-[420px] xl:max-w-[468px]">
          <h1 className="text-3xl md:text-5xl font-semibold xl:text-[64px] text-primary mb-6">
            FAANG INVESTING COMMUNITY
          </h1>
          <div className="text-xl md:text-2xl  xl:text-[30px] font-medium mb-8 text-secondary">
            We help people working in BigTech make better financial decisions
            with the data and insights provided by AI
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full md:w-fit ">
          <div className="bg-hero-image bg-cover bg-center bg-no-repeat rounded-[25px] overflow-hidden p-[15px] md:p-[20px] lg:p-[25px]">
            <div className="rounded-[25px] shadow-lg py-[30px] md:py-[35px] px-8 xl:px-12 gap-5 md:gap-6 lg:gap-7 bg-white flex flex-col items-center justify-center w-full">
              <div className="text-2xl md:text-[24px] lg:text-[26px] xl:text-[28px] font-semibold text-center text-primary">
                Welcome Back
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 w-full max-w-[420px]"
              >
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border text-lg md:text-xl placeholder:text-[#B0B9D7] border-[#B0B9D7] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.username && touched.username
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {errors.username && touched.username && (
                    <div className="text-red-500 text-sm md:text-base mt-2 font-medium">
                      {errors.username}
                    </div>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border text-lg md:text-xl placeholder:text-[#B0B9D7] border-[#B0B9D7] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <span className="flex justify-between items-center mt-2 font-medium text-sm md:text-base">
                    <div>
                      {errors.password && touched.password && (
                        <div className="text-red-500 font-medium">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <Link
                        href="/forgot-password"
                        className="text-primary hover:text-secondary"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-lg md:text-xl text-white py-2 px-4 rounded-[10px] hover:bg-secondary transition-colors duration-200"
                >
                  Log In
                </button>
              </form>

              <div className="flex justify-between px-3 gap-3 xl:px-10  items-center w-full text-secondary text-sm md:text-base">
                <div>Don&apos;t have an account? </div>
                <Link
                  href="/signup"
                  className="text-primary hover:text-secondary font-medium"
                >
                  Create one
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for table below screens  */}
      <div className="w-full sm:w-[500px] text-center flex flex-col items-center justify-center gap-8 lg:hidden">
        <Link href="/" className="flex items-center justify-center sm:hidden">
          <div className="flex items-center flex-col gap-2">
            <Image src={LogoIcon} alt="Menu" className="h-12 w-12" />
            <span className="text-xl font-semibold text-primary">
              Stock<span className="text-secondary">Clubs</span>
            </span>
          </div>
        </Link>

        <h1 className="text-3xl md:text-5xl font-semibold xl:text-[64px] text-primary">
          FAANG INVESTING COMMUNITY
        </h1>
        <div className="text-xl md:text-2xl  xl:text-[30px] font-medium  text-secondary">
          We help people working in BigTech make better financial decisions with
          the data and insights provided by AI
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-5">
          <Image
            src={AppleLogo}
            alt="Menu"
            className="h-[60px] w-[210px] cursor-pointer"
            onClick={() => {
              console.log("object");
            }}
          />
          <Image
            src={GoogleLogo}
            alt="Menu"
            className="h-[60px] w-[210px] cursor-pointer"
            onClick={() => {
              console.log("object");
            }}
          />
        </div>

        <div className="w-[280px] sm:w-full text-center text-secondary text-sm md:text-base font-normal">
          <span className="font-bold text-base md:text-lg">Sign up today</span>{" "}
          and manage your portfolio like a pro with personalized assistant and
          access to a trusted tech community of 1,200 members who connected
          $150M+ of total assets.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
