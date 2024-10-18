import { useState, useEffect } from "react";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/video.json")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) =>
        console.error("Error while fetching the video:", error)
      );
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-72 p-6 w-[83%] absolute left-[-3%]  overflow-y-auto overflow-x-hidden ">
      {videos.map((video) => (
        <div
          key={video.id}
          className="border rounded-lg overflow-hidden shadow-lg"
        >
          <div className="relative">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
              {video.duration}
            </span>
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold truncate">{video.title}</h2>

            <div className="flex items-center mt-2">
              <img
                src={video.channelLogo}
                alt={video.channel}
                className="w-8 h-8 rounded-full mr-2"
              />
              <p className="text-gray-600 truncate">{video.channel}</p>
            </div>

            <p className="text-gray-500 mt-1 text-sm">
              {video.views} • {video.uploaded}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
