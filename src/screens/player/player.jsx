import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard/SongCard";
import Queue from "../../components/queue/Queue";

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, serCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient.get(`playlists/${location.state?.id}/tracks`).then((res) => {
        setTracks(res.data.items);
        setCurrentTrack(res.data.items[0].track);
      });
    }
  }, [location.state]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body"></div>
      <div className="right-player-body">
        <SongCard album={currentTrack.album} />
        <Queue />
      </div>
    </div>
  );
}
