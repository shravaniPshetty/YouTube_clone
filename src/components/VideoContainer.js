import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils.js/constants"
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if(videos.length===0) 
  return <Shimmer/>
  else{

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"https://www.youtube.com/watch?v=" + video.id}>
          <VideoCard  info={video} />
        </Link>
      ))}
    </div>
  );
}
};

export default VideoContainer;