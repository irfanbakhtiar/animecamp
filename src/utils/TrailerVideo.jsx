"use client";

import YouTube from "react-youtube";

const Trailer = ({ youtubeId }) => {
  const option = {
    width: "100%",
    height: "250",
  };
  return (
    <div className="flex justify-center px-4">
      <YouTube
        videoId={youtubeId}
        onReady={(e) => e.target.pauseVideo()}
        opts={option}
        onError={() => alert("Trailer video is broken!")}
      />
    </div>
  );
};

export default Trailer;
