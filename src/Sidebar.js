import React from "react";
import SidebarRow from "./Sidebar/SidebarRow";
import "./Sidebar.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <NavLink
        className="nav__component"
        activeClassName="nav__component_active"
        exact
        style={{ textDecoration: "none" }}
        to="/"
      >
        <SidebarRow title={user.displayName} src={user.photoURL} />
      </NavLink>

      <NavLink
        className="nav__component"
        activeClassName="nav__component_active"
        exact
        style={{ textDecoration: "none" }}
        to="/covid"
      >
        <SidebarRow
          title="COVID-19 Information Center"
          Icon={LocalHospitalIcon}
        />
      </NavLink>

      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <NavLink
        className="nav__component"
        activeClassName="nav__component_active"
        exact
        style={{ textDecoration: "none" }}
        to="/friends"
      >
        <SidebarRow title="Friends" Icon={PeopleIcon} />
      </NavLink>

      <NavLink
        className="nav__component"
        activeClassName="nav__component_active"
        exact
        style={{ textDecoration: "none" }}
        to="/messenger"
      >
        <SidebarRow title="Messenger" Icon={ChatIcon} />
      </NavLink>

      <SidebarRow title="MarketPlace" Icon={StorefrontIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <SidebarRow title="MarketPlace" Icon={ExpandMoreOutlined} />
    </div>
  );
}

export default Sidebar;
