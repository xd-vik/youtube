import { useState } from "react";

const ChipBar = () => {
  const [categories] = useState([
    "All",
    "Music",
    "Gaming",
    "News",
    "Movies",
    "Live",
    "Programming",
    "Comedy",
    "Technology",
    "Api",
    "T-series",
    "New Released",
    "Trending",
  ]);

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="bg-white border-b p-4">
      <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="inline-flex space-x-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-md ${
                activeCategory === category
                  ? "bg-black text-[#dadada]"
                  : "bg-gray-200 text-black"
              } transition-all duration-200 ease-in-out`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChipBar;
