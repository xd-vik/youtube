import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-[#0f0f0f] flex flex-row p-5 gap-12">
      <div className="w-[15%]  flex flex-row items-center gap-5">
        {/* Menu Icon */}
        <div className="text-[#6d6b6b]">
          <i className="ri-menu-line text-[1.5rem]"></i>
        </div>
        {/* Logo */}
        <div className="flex items-center justify-center gap-1">
          <div className="flex items-center justify-center w-[2rem] h-[1.5rem] bg-red-600 rounded-md">
            <span className="flex justify-center items-center">
              <i className="ri-play-fill text-white text-[0.85rem]"></i>
            </span>
          </div>
          <div className="flex items-center space-x-1 text-white capitalize">
            <span className="text-[1.6rem] tracking-[-0.099em] font-light">
              YouTube
            </span>
            <span className="text-[0.9rem] align-top">IN</span>
          </div>
        </div>
      </div>

      {/* Input Field */}
      <div className="flex flex-row w-[65%] relative">
        <div className="w-[90%] border rounded-full border-[#dadada] absolute">
          <input
            type="text"
            className="w-[90%] h-[4rem] px-5 py-2 rounded-md focus:outline-none"
            placeholder="Search"
          />
          <button className=" absolute w-[10%] h-[4rem] text-white text-xl">
            <i className="ri-search-line"></i>
          </button>
        </div>
        {/* <div>
          <span>
            <i class="ri-mic-fill text-white text-xl"></i>
          </span>
        </div> */}
      </div>

      {/* Notifications & Icons Placeholder */}
    </div>
  );
};
{/* <i class="ri-mic-fill text-white text-xl"></i>; */}

export default Header;
