import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Library from "../library/Library";
import Feed from "../feeds/Feed";
import Trending from "../trending/Trending";
// Fixed casing
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Player from "../player/player";
import Favorites from "../favorites/favorites";
import Login from "../auth/Login";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    const _token = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("token", _token);
    setToken(_token);
  }, []);
  return !token ? (
    <Login />
  ) : (
    <BrowserRouter>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
