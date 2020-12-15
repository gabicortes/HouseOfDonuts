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
          {photos.map((photo) => (
            <a
              className="photosOneByOne"
              href={photo.permalink}
              target="_blank"
            >
              <img
                className="photoInstagram"
                src={photo.media_url}
                key={photo.id}
              />
              <AiOutlineInstagram className="iconInstagramInsideImage" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
