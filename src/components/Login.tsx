import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center bg-linear-to-br  from-[#a6c0fe] to-[#ffeaf6] m-auto  ">
      <div className="p-[26.35px] flex ml-6 bg-white/40  rounded-[36px] border-white border-2">
        <section className="w-152.75 h-174.5  relative  flex flex-col pt-[42px] rounded-y-4xl rounded-l-4xl bg-white overflow-hidden">
          <div className=" z-10 h-full w-full ">
            {" "}
            <div className="font-bold text-3xl  max-w-152.75 text-center  ">
              <p>
                তোমার{" "}
                <span className="text-blue-500">
                  SSC প্রস্তুতির <br />{" "}
                </span>
                জন্য স্মার্ট{" "}
                <span className="text-blue-500">লার্নিং সিস্টেম </span>{" "}
              </p>
            </div>
            <div className="text-slate-600 text-[16.89px] text-center font-normal z-1">
              <p>স্মার্ট অনুশীলন • পরীক্ষা • AI সহায়তা • প্রোগ্রেস রিপোর্ট</p>
            </div>
            <div>
              <img
                src="\src\assets\Big-mobile-screen.png"
                alt="bigMobileScreen-icon"
                className="mx-auto"
              />
            </div>
          </div>
          <div
            className="absolute opacity-100 rounded-[100%] z-1
            w-[854px] h-[491px] top-[170px] left-[-120px] 
              bg-[linear-gradient(180deg,_#FFFFFF)_0%,_#FFFFFF_28%,_#FFFFFF_100%)]"
          ></div>
          <div
            className="absolute opacity-100 rounded-[50%] z-1
            w-[854px] h-[491px] top-[170px] left-[-120px] 
            bg-[linear-gradient(180deg,_#FFFFFF_0%,_#FFFFFF_82%,_#FFFFFF_100%)]"
          ></div>
          <div
            className="absolute opacity-40 rounded-full z-1
  w-[350px] h-[280px] top-[-60px] left-[-120px] 
  bg-[#003EFF] blur-[100px] pointer-events-none"
          ></div>

          <div
            className="absolute opacity-50 rounded-full z-1
  w-[320px] h-[320px] top-[240px] left-[200px] 
  bg-[#003EFF] blur-[120px] "
          ></div>

          <section className="z-0 -mt-10 truncate flex">
            {Array(16)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-linear-to-r from-[#1447E6] to-[#6E9BFF] w-10 h-200"
                />
              ))}
          </section>
        </section>

        <section className="z-1  w-145.5 bg-white flex flex-col  border border-[#D9D9D9] rounded-4xl -ml-6 ">
          <div className=" mx-auto mt-[88px] mb-[40px]">
            <img
              src="\src\assets\praxix-logo.png"
              alt="Praxix-logo"
              className=""
            />
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
                    className=" items-center hover:scale-110 hover:cursor-pointer  "
                  />
                  <img
                    src="/src/assets/fb-icon.png"
                    alt="fb-icon"
                    className=" items-center  hover:scale-110 hover:cursor-pointer"
                  />
                  <img
                    src="/src/assets/apple-icon.png"
                    alt="apple-icon"
                    className=" items-center hover:scale-110 hover:cursor-pointer "
                  />
                </div>
                <div className="text-sm text-center mt-5">
                  <p>
                    এখনও অ্যাকাউন্ট তৈরি করেননি?
                    <Link to="/register" className="text-blue-500 ml-1 hover:text-indigo-500">
      রেজিস্টার
    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
