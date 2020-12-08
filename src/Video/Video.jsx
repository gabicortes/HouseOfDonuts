import React from "react";
import "./Video.css";

export function Video() {
  return (
    <div className="videoWrapper">
      <video
        className="videoDonut"
        controls="true"
        muted="true"
        preload="auto"
        playsinline=""
        poster="https://firebasestorage.googleapis.com/v0/b/house-of-donuts-ad052.appspot.com/o/IMG_9621%202.jpg?alt=media&"
        src="https://firebasestorage.googleapis.com/v0/b/house-of-donuts-ad052.appspot.com/o/WhatsApp%20Video%202020-10-02%20at%2021.38.11.mp4?alt=media&"
      ></video>
    </div>
  );
}
