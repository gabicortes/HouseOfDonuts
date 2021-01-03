import React, { useEffect, useState } from "react";
import "./Instagram.css";
import axios from "axios";
import photoProfileInstagram from "./mobilePhoneInstagramScreen.png";
import likeInstagram from "./likeInstagram.png";
import { AiOutlineInstagram } from "react-icons/ai";

export function Instagram() {
  const [photos, setPhotos] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      `https://us-central1-house-of-donuts-ad052.cloudfunctions.net/photos`
    );

    const photosToShow = response.data.data.slice(0, 4);
    setPhotos(photosToShow);
  }, []);

  function renderPhoto(photo) {
    console.log(photo);

    var isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
      })(
        !window["safari"] ||
          (typeof safari !== "undefined" && window["safari"].pushNotification)
      );

    let mediaTag;
    if (photo.media_url.includes("video") && !isSafari) {
      mediaTag = (
        <video
          className="photoInstagram"
          src={photo.media_url}
          key={photo.id}
        />
      );
    } else {
      mediaTag = (
        <img className="photoInstagram" src={photo.media_url} key={photo.id} />
      );
    }

    return (
      <a className="photosOneByOne" href={photo.permalink} target="_blank">
        {mediaTag}
        <AiOutlineInstagram className="iconInstagramInsideImage" />
      </a>
    );
  }

  return (
    <div>
      <div className="titleSectionInstagram">
        <div className="titleInstagram"> Seguinos en Instagram</div>
        <img className="iconLikeInstagram" src={likeInstagram} />{" "}
      </div>
      <div className="instagramPhotosWrapper">
        <div className="photoInstagramProfileWrapper">
          <img className="photoProfileInstagram" src={photoProfileInstagram} />
        </div>
        <div className="photosWrapper">
          {photos.map((photo) => renderPhoto(photo))}
        </div>
      </div>
    </div>
  );
}
