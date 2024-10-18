const Header = () => {
  return (
    <div className="w-full bg-white flex flex-row p-3 gap-5 fixed top-0">
      <div className="w-[15%] flex flex-row items-center gap-5">
        <div className="text-black">
          <i className="ri-menu-line text-[1.5rem]"></i>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="flex items-center justify-center w-[2rem] h-[1.5rem] bg-red-600 rounded-md">
            <span className="flex justify-center items-center">
              <i className="ri-play-fill text-white text-[0.85rem]"></i>
            </span>
          </div>
          <div className="flex items-center space-x-1 text-black capitalize">
            <span className="text-[1.6rem] tracking-[-0.099em] font-medium">
              YouTube
            </span>
            <span className="text-[0.9rem] align-top">IN</span>
          </div>
        </div>
      </div>

      <div className="w-[55%] flex items-center justify-center">
        <div className="w-full flex border rounded-full border-[#848383] overflow-hidden opacity-50 ml-24">
          <input
            type="text"
            className="w-[90%] py-1 px-3 bg-white text-black focus:outline-none"
            placeholder="Search"
          />
          <button className="w-[10%] py-1 px-3 bg-[#d8d8d8] border-l text-xl">
            <i className="ri-search-line text-[#5c5b5b]"></i>
          </button>
        </div>
      </div>

      <div className="w-[10%] flex justify-start items-center">
        <span className="flex justify-center items-center h-10 w-10 border px-3 py-5 border-[#dedcdc] rounded-full bg-[#e5e5e5] ">
          <i className="ri-mic-fill text-black text-xl"></i>
        </span>
      </div>

      <div className="w-[20%] flex justify-center items-center gap-4">
        <button className="font-thin flex items-center space-x-2 bg-[#e5e5e5] text-black px-4 py-1 rounded-full hover:bg-[#c4c3c3]">
          <i className="ri-add-fill text-2xl text-black"></i>
          <span className="mb-[0.41rem]">Create</span>
        </button>

        <div className="relative">
          <button className="p-2">
            <i className="ri-notification-3-line ri-xl text-black"></i>
          </button>
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
            9+
          </span>
        </div>

        <div className="w-9 h-9 bg-[#5d4038] text-white flex items-center justify-center rounded-full">
          <span className="font-semibold">S</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
