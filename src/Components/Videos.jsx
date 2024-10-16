import { useState, useEffect } from "react";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/video.json")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching the videos:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-72 p-6">
      {videos.map((video) => (
        <div key={video.id} className="border rounded-lg overflow-hidden">
          {/* Thumbnail with video duration */}
          <div className="relative">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-40 sm:h-44 object-cover"
            />
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
              {video.duration}
            </span>
          </div>
          {/* Video Info */}
          <div className="p-4">
            <h2 className="text-lg font-semibold">{video.title}</h2>
            <p className="text-gray-600">{video.channel}</p>
            <p className="text-gray-500">
              {video.views} • {video.uploaded}
            </p>
            {/* <span className="text-sm bg-gray-200 px-2 py-1 rounded">
              {video.category}
            </span> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
