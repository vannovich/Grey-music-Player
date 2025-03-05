import React from "react";
import "./AlbumImages.css";

export default function AlbumImage(props) {
  console.log(props.url);
  return (
    <div>
      <div className="albumImage">
        <img src={props.url} alt="album art" className="albumImage-art" />
      </div>
      <div className="albumImage-shadow">
        <img src={props.url} alt="album art" className="albumImage-art" />
      </div>
    </div>
  );
}
