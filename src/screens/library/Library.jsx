import React, { useEffect, useState } from "react";
import "./libary.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const playPlayList = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists.map((playlist) => (
          <div
            className="playlist-card"
            key={playlist.id}
            onClick={() => playPlayList(playlist.id)}
          >
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
