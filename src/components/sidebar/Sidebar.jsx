import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButtons from "./sidebarButtons";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa"; //
import apiClient from "../../spotify"; // Ensure apiClient is correctly configured

export default function Sidebar() {
  const [image, setImage] = useState("");

  useEffect(() => {
    apiClient
      .get("me")
      .then((response) => {
        console.log("User Data:", response.data);
        setImage(response.data.images[0].url || <FaUser />);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="sidebar-container">
      <img src={image} alt="profile" className="profile-img" />

      <div>
        <SidebarButtons title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButtons title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButtons title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButtons
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButtons title="Library" to="/" icon={<IoLibrary />} />
      </div>

      <SidebarButtons title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
