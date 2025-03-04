import React from "react";
import "./sidebar.css";
import SidebarButtons from "./sidebarButtons";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img src="" alt="profile" className="profile-img" />

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
