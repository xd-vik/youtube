import { SiYoutubeshorts } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { MdOndemandVideo } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { FiThumbsUp } from "react-icons/fi";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdMovieEdit } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { BsNewspaper } from "react-icons/bs";
import { IoTrophyOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";
import Footer from "./Footer";



const Sidebar = () => {
  return (
    <div
      className="w-[17%] bg-white overflow-y-scroll overflow-x-hidden p-5  text-[#0f0f0f] "
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#2d2d2d #f5f5f5",
      }}
    >
      <div className="flex flex-row gap-3">
        <ul className="flex flex-col ">
          <span>
            <FaHome className="text-[1.5rem] mb-5 " />
          </span>
          <span>
            <SiYoutubeshorts className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <MdOutlineSubscriptions className="text-[1.5rem] mb-5" />
          </span>
        </ul>
        <ul className="flex flex-col">
          <a className="mb-5" href="#">
            Home
          </a>
          <a className="mb-5" href="#">
            Shorts
          </a>
          <a className="mb-5" href="#">
            Subscriptions
          </a>
        </ul>
      </div>
      <hr className="opacity-50 mb-4 border-[#9c9b9b]  " />

      <div className=" flex flex-row gap-1 mb-3">
        <h3 className="capitalize text-[1.1rem] font-normal ">you</h3>
        <span>
          <i className="ri-arrow-right-s-line text-[1.3rem] font-thin"></i>
        </span>
      </div>
      <div className="flex flex-row gap-3">
        <ul className="flex flex-col ">
          <span>
            <MdHistory className="text-[1.5rem] mb-5 " />
          </span>
          <span>
            <CgPlayList className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <MdOndemandVideo className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <IoBulbOutline className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <MdOutlineWatchLater className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <FiThumbsUp className="text-[1.5rem] mb-5" />
          </span>
        </ul>
        <ul className="flex flex-col">
          <a className="mb-5" href="#">
            History
          </a>
          <a className="mb-5" href="#">
            Playlist
          </a>
          <a className="mb-5" href="#">
            Your videos
          </a>
          <a className="mb-5" href="#">
            Your courses
          </a>
          <a className="mb-5" href="#">
            Watch later
          </a>
          <a className="mb-5" href="#">
            Liked videos
          </a>
        </ul>
      </div>
      <hr className="opacity-50 mb-4 border-[#9c9b9b]  " />
      <div className=" flex flex-row gap-1 mb-3">
        <h3 className="capitalize text-[1.1rem] font-normal ">Subscriptions</h3>
      </div>
      <div className="flex flex-row gap-3">
        <ul className="flex flex-col ">
          <div className="w-7 mb-[0.8rem] h-7 bg-[#5d4038] text-[#dadada] flex items-center justify-center rounded-full">
            <span className="font-semibold">A</span>
          </div>
          <div className="w-7 h-7 mb-[1.05rem] bg-[#2d4038] text-[#dadada] flex items-center justify-center rounded-full">
            <span className="font-semibold">N</span>
          </div>
          <div className="w-7 h-7 mb-4 bg-[#5d4038] text-[#dadada] flex items-center justify-center rounded-full">
            <span className="font-semibold">R</span>
          </div>
          <div className="w-7 h-7 mb-[1rem] bg-[#cf7866] text-[#dadada] flex items-center justify-center rounded-full">
            <span className="font-semibold">G</span>
          </div>
          <div className="w-7 h-7 mb-4 bg-[#8498da] text-[#dadada] flex items-center justify-center rounded-full">
            <span className="font-semibold">I</span>
          </div>
          <div className="w-7 h-7  bg-[#3f5d38] text-[#dadada] flex items-center justify-center rounded-full">
            <span className="font-semibold opacity-50">A</span>
          </div>
        </ul>
        <ul className="flex flex-col">
          <a className="mb-5" href="#">
            Abdul bari
          </a>
          <a className="mb-5" href="#">
            Aaj tak
          </a>
          <a className="mb-5" href="#">
            AD react
          </a>
          <a className="mb-5" href="#">
            Gyan gaming
          </a>
          <a className="mb-5" href="#">
            India tv
          </a>
          <a className="mb-5" href="#">
            Amit-kumar
          </a>
        </ul>
      </div>
      <div className="flex flex-row gap-3 mb-5 ">
        <span>
          <i className="ri-arrow-down-s-line text-xl"></i>
        </span>
        <span className="text-[1rem]">show more</span>
      </div>
      <hr className="opacity-50 mb-4 border-[#9c9b9b]  " />
      <h3 className="text-[1.2rem] font-normal mb-4">Explore</h3>
      <div className="flex flex-row gap-3">
        <ul className="flex flex-col ">
          <span>
            <AiOutlineFire className="text-[1.5rem] mb-5 " />
          </span>
          <span>
            <MdOutlineShoppingBag className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <IoMusicalNotesOutline className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <MdMovieEdit className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <CgMediaLive className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <SiYoutubegaming className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <BsNewspaper className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <IoTrophyOutline className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <MdOutlineWatchLater className="text-[1.5rem] mb-5" />
          </span>
          <span className="mb-4">
            <i className="ri-handbag-line text-xl "></i>
          </span>
          <span>
            <FiThumbsUp className="text-[1.5rem] mb-5" />
          </span>
        </ul>
        <ul className="flex flex-col">
          <a className="mb-5" href="#">
            Trending
          </a>
          <a className="mb-5" href="#">
            Shopping
          </a>
          <a className="mb-5" href="#">
            Music
          </a>
          <a className="mb-5" href="#">
            Moives
          </a>
          <a className="mb-5" href="#">
            Gaming
          </a>

          <a className="mb-5" href="#">
            Courses
          </a>
          <a className="mb-5" href="#">
            News
          </a>
          <a className="mb-5" href="#">
            Sports
          </a>

          <a className="mb-5" href="#">
            Watch later
          </a>
          <a className="mb-5" href="#">
            Fashion & Beauty
          </a>
          <a className="mb-5" href="#">
            Liked videos
          </a>
        </ul>
      </div>
      <hr className="opacity-50 mb-4 border-[#9c9b9b]  " />
      <div className="flex flex-row gap-3">
        <ul className="flex flex-col ">
          <span>
            <IoSettingsOutline className="text-[1.5rem] mb-5 " />
          </span>
          <span>
            <IoFlagOutline className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <IoMdHelpCircleOutline className="text-[1.5rem] mb-5" />
          </span>
          <span>
            <RiFeedbackLine className="text-[1.5rem] mb-5" />
          </span>
        </ul>
        <ul className="flex flex-col">
          <a className="mb-5" href="#">
            Settings
          </a>
          <a className="mb-5" href="#">
            Report History
          </a>
          <a className="mb-5" href="#">
            Help
          </a>
          <a className="mb-5" href="#">
            Send feedback
          </a>
        </ul>
      </div>
      <hr className="opacity-50 mb-4 border-[#9c9b9b]  " />
      <Footer />
    </div>
  );
};

export default Sidebar;
