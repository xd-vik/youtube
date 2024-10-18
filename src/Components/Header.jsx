const Header = () => {
  return (
    <div className="w-full  bg-[#0f0f0f] flex flex-row p-3 gap-5 fixed top-0">
      {/* Menu and Logo Section */}
      <div className="w-[15%] flex flex-row items-center gap-5">
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

      {/* Input Field Section */}
      <div className="w-[55%] flex items-center justify-center">
        <div className="w-full flex border rounded-full border-[#dadada] overflow-hidden opacity-50 ml-24">
          <input
            type="text"
            className="w-[90%] py-1 px-3 bg-[#0f0f0f] text-white focus:outline-none"
            placeholder="Search"
          />
          <button className="w-[10%] py-1 px-3 bg-[#3d3d3d] border-l text-xl">
            <i className="ri-search-line text-[#f8ecec]"></i>
          </button>
        </div>
      </div>

      {/* Microphone Icon Section */}
      <div className="w-[10%] flex justify-start items-center">
        <span className="flex justify-center items-center h-10 w-10 border px-3 py-5 border-[#3d3d3d] rounded-full bg-[#3d3d3d]">
          <i className="ri-mic-fill text-white text-xl"></i>
        </span>
      </div>

      {/* Notifications & Icons Section */}
      <div className="w-[20%] flex justify-center items-center  gap-4">
        <button class="font-thin flex items-center space-x-2 bg-[#272727] text-[#dadada] px-4 py-1 rounded-full hover:bg-gray-600">
          {/* <i class="ri-add-line ri-lg font-thin text-[2rem]"></i> */}
          <i class="ri-add-fill  text-2xl"></i>
          <span class=" ">Create</span>
        </button>

        <div class="relative">
          <button class="p-2">
            <i class="ri-notification-3-line ri-xl text-[#dadada]"></i>
          </button>
          <span class="absolute -top-1 -right-1 bg-red-600 text-[#dadada] text-xs font-bold rounded-full px-1.5 py-0.5">
            9+
          </span>
        </div>

        <div class="w-9 h-9 bg-[#5d4038] text-[#dadada] flex items-center justify-center rounded-full">
          <span class="font-semibold">S</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
