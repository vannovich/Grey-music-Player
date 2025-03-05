import React from "react";
import "./AlbumInfo.css";

export default function AlbumInfo({ album }) {
  if (!album) {
    return <div>Loading album details...</div>; // Handle null state
  }

  const artists =
    album.artists?.map((artist) => artist.name).join(", ") || "Unknown Artist";

  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <p>{`${album.name} - ${artists}`}</p>
      </div>
      <div className="album-info">
        <p>
          {album.label || "Unknown Label"} is an {album?.album_type} with{" "}
          {album?.total_tracks} tracks
        </p>{" "}
        {/* Display Label Info */}
      </div>
      <div className="album-release">
        <p>Release Date: {album.release_date || "Unknown Release Date"}</p>{" "}
        {/* Display Release Date */}
      </div>
    </div>
  );
}
