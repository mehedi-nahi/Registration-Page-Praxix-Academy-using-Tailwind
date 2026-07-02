import React from "react";
import {Link , useNavigate} from "react-router-dom"

const RegistrationThree = () => {
  const navigate = useNavigate () ;
  return (
    <section className=" w-145.5 h-dvh mx-auto bg-white flex flex-col  border border-[#D9D9D9] rounded-4xl  ">
      <div className=" mx-auto mt-[88px] mb-[40px]">
        <img src="\src\assets\praxix-logo.png" alt="Praxix-logo" className="" />
      </div>
      <div className="flex relative justify-between mx-17">
        <div className="mb-1 w-7 h-7 bg-[#1447E6] text-white text-center  rounded-sm">
          <p className="">১</p>
        </div>
        <div>
          <div className="w-48.75 h-1  absolute top-2.5  bg-[#1447E6] z-0 "></div>
        </div>
        
        <div className="mx-auto w-7 h-7 bg-[#1447E6] text-white text-center z-1  rounded-sm">
          <p className="">২</p>
                  <div className="pl-6.5 ">
          <div className="w-46 h-1  absolute top-2.5  bg-[#1447E6] z-0 "></div>
        </div>
        </div>
        
        <div className="justify-end w-7 h-7 z-1 bg-[#667085] text-white text-center  rounded-sm">
          <p className="">৩</p>
        </div>
      </div>
      <div className="flex justify-between text-[#667085] mx-10 mb-4 font-medium text-sm">
        <p className="text-[#1447E6] ">ব্যক্তিগত তথ্য</p>
        <p className="pl-10 text-[#1447E6] ">একাডেমিক তথ্য</p>
        <p>অ্যাকাউন্ট সম্পর্কিত তথ্য</p>
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
          <div className="flex flex-col gap-1 mt-6">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1 ">
                <label className="text-[14px] font-medium text-[#0e0f0f]">
                  পাসওয়ার্ড <span className="text-red-600">*</span>
                </label>
                <div className="flex relative">
                  <input
                    type="text"
                    placeholder="********"
                    className="h-11 w-55 py-auto rounded-md border border-[#4B5563] px-3 text-[14px]  placeholder:text-slate-400"
                  />
                  <img
                    src="/src/assets/pass-eye-icon.png"
                    alt="Flag"
                    className="absolute items-center inset-y-3.5 right-4 "
                  />
                </div>
              </div>
              <div className="flex flex-col ml-5  gap-1 ">
                <label className="text-[14px] font-medium text-[#0e0f0f]">
                  পাসওয়ার্ড নিশ্চিত করো <span className="text-red-600">*</span>
                </label>
                <div className="flex  relative">
                  <input
                    type="text"
                    placeholder="********"
                    className="h-11 w-55 py-auto rounded-md border py-auto border-[#4B5563] px-3 text-[14px]  placeholder:text-slate-400"
                  />
                  <img
                    src="/src/assets/pass-eye-icon.png"
                    alt="Flag"
                    className="absolute items-center inset-y-3.5 right-4 "
                  />
                </div>
              </div>
            </div>
            <div className="relative ">
              <button onClick= {()=> navigate ("/register/step-4")}
                className="mt-6 w-full h-12.5 py-2.5 text-center text-4 font-medium text-white bg-[#0c28b7] border border-slate-400
                   hover:bg-indigo-700 rounded-lg cursor-pointer"
              >
                পরবর্তী ধাপ
              </button>
              <img
                src="/src/assets/Arrow.png"
                alt="password-hidden-icon"
                className=" absolute inset-y-10 right-44 items-center  "
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
                className=" items-center hover:scale-110 hover:cursor-pointer "
              />
              <img
                src="/src/assets/fb-icon.png"
                alt="fb-icon"
                className=" items-center hover:scale-110 hover:cursor-pointer "
              />
              <img
                src="/src/assets/apple-icon.png"
                alt="apple-icon"
                className=" items-center hover:scale-110 hover:cursor-pointer "
              />
            </div>
            <div className="text-sm text-center mt-5">
              <p>
                ইতিমধ্যে একাউন্ট আছে?
                <Link to ="/" className="text-blue-500 ml-1 hover:text-indigo-500 hover:cursor-pointer ">লগইন</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationThree;
