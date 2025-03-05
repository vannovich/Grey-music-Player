import React, { useEffect, useState } from "react";
import "./libary.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

// const clientID = "7c01e8c6b889469f8ea725dce16da227";
// const redirectUrl = "http://localhost:5173/";
// const SCOPES = ["playlist-read-private", "user-library-read"].join("%20");

export default function Library() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from storage
    if (!token) {
      console.error("No access token found!");
      return;
    }

    fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlaylists(data.items || []);
      })
      .catch((error) => console.error("Error fetching playlists:", error));
  }, []);

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists.map((playlist) => (
          <div className="playlist-card" key={playlist.id}>
            <img
              src={playlist.images[0].url}
              className="playlist-image"
              alt="playlist-art"
            />
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitles">{playlist.tracks.total} songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
