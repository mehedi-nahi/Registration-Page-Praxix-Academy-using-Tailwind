import React from "react";

const RegistrationFour = () => {
  return (
    <section className=" w-145.5 h-dvh mx-auto bg-white flex flex-col  border border-[#D9D9D9] rounded-4xl  ">
      <div className=" mx-auto mt-[88px] mb-[40px]">
        <img src="\src\assets\praxix-logo.png" alt="Praxix-logo" className="" />
      </div>
      <div className="mx-auto mb-5 text-[#1E2939] font-semibold">
        <h1>তোমার নম্বরে পাঠানো ৬ সংখ্যার OTP-টি লেখো </h1>
      </div>

      <div className="flex flex-col mx-[49px] m-b-[89px] ">
        <div className="flex flex-col gap-1">
          <div className="flex justify-center gap-6 mb-5">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <input
                  type="text"
                  className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-blue-600 "
                />
              ))}
          </div>
          <div className="relative ">
            <button
              className=" w-full h-12.5  text-center text-4 font-medium text-white bg-[#0c28b7] border border-slate-400
                   hover:bg-indigo-700 rounded-lg cursor-pointer"
            >
              OTP যাচাই করো
            </button>
            <img
              src="/src/assets/Arrow.png"
              alt="password-hidden-icon"
              className=" absolute inset-y-10.5 right-41 items-center  "
            />
          </div>

          <div className="text-[#4C515B] text-sm flex flex-col my-4 ">
            <p className=" mx-auto mb-1">কোনো OTP পাওনি?</p>
            <p className="mx-auto">আবার OTP পাঠানোর অনুরোধ জানাতে অপেক্ষা করো : <span className="text-blue-700">০০ : ৪৬ সেকেন্ড </span></p>
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
              ইতিমধ্যে একাউন্ট আছে?
              <span className="text-blue-500 ml-1">লগইন</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationFour;
