import React from "react";

const RegistrationOne = () => {
  return (
    <section className=" w-145.5 h-dvh mx-auto bg-white flex flex-col  border border-[#D9D9D9] rounded-4xl  ">
      <div className=" mx-auto mt-[88px] mb-[40px]">
        <img src="\src\assets\praxix-logo.png" alt="Praxix-logo" className="" />
      </div>
      <div className="flex relative justify-between mx-17">
        <div className="mb-4 w-7 h-7 bg-blue-600 text-white text-center  rounded-sm">
            <p className="">১</p>
          </div>
        <div>
          <div className="w-100 h-1  absolute top-2.5  bg-slate-500 z-0 "></div>
        </div>
        <div className="mx-auto w-7 h-7 bg-[#667085] text-white text-center z-1  rounded-sm">
          <p className="">২</p>
        </div>
        <div className="justify-end w-7 h-7 z-1 bg-[#667085] text-white text-center  rounded-sm">
          <p className="">৩</p>
        </div>
      </div>

      <div className="flex flex-col mx-[49px] m-b-[89px] ">
        <div className="flex flex-col gap-1">
          <label className="text-[14px] font-medium text-[#344054]">
            মোবাইল নম্বর
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img
                src="/src/assets/BD-flag.png"
                alt="Flag"
                className="h-4 w-6 object-cover rounded-sm"
              />
            </div>
            <input
              type="text"
              placeholder="181656540"
              className="h-[44px] w-full rounded-md border border-[#4B5563] pl-11 pr-3 text-[14px] outline-none placeholder:text-[#98A2B3]"
            />
          </div>
          <div className="flex flex-col gap-1 mt-3">
            <label className="text-[14px] font-medium text-[#0e0f0f]">
              পাসওয়ার্ড
            </label>
            <div className="flex justify-between relative">
              <input
                type="text"
                placeholder="********"
                className="h-11 w-full rounded-md border border-[#4B5563] px-3 text-[14px]  placeholder:text-slate-400"
              />
              <img
                src="/src/assets/pass-eye-icon.png"
                alt="password-hidden-icon"
                className=" absolute items-center inset-y-3.5 right-4 "
              />
            </div>
            <div className="flex mb-3 justify-between">
              <div className="text-[14px] font-regular text-slate-600">
                <p>লগইন তথ্য মনে রাখুন</p>
              </div>
              <div className="text-blue-700 ">
                <p>Forgot Password?</p>
              </div>
            </div>
            <div className="relative ">
              <button
                className="w-full h-12.5 py-2.5 text-center text-4 font-medium text-white bg-[#0c28b7] border border-slate-400
                   hover:bg-indigo-700 rounded-lg cursor-pointer"
              >
                লগইন করুন
              </button>
              <img
                src="/src/assets/Arrow.png"
                alt="password-hidden-icon"
                className=" absolute inset-y-4.5 right-44 items-center  "
              />
            </div>
            <div className="relative mb-7">
              <div className="w-120.75 h-px  bg-slate-300 z-0 absolute top-8.75 "></div>
              <div className=" z-1 left-56.25  top-6 absolute">
                <p className="bg-white px-4">Or</p>
              </div>
            </div>
          </div>
          <div className="w-57 h-15 mt-10 mx-auto ">
            <div className="flex justify-between ">
              <img
                src="/src/assets/Google-icon.png"
                alt="Google-icon"
                className=" items-center  "
              />
              <img
                src="/src/assets/fb-icon.png"
                alt="fb-icon"
                className=" items-center  "
              />
              <img
                src="/src/assets/apple-icon.png"
                alt="apple-icon"
                className=" items-center  "
              />
            </div>
            <div className="text-sm text-center mt-5">
              <p>
                এখনও অ্যাকাউন্ট তৈরি করেননি?
                <span className="text-blue-500">রেজিস্টার</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationOne;
