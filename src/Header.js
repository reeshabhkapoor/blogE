import React from "react";
import "./Header.css";
import FB from "./Images/fb-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";
import MenuAction from "./MenuAction";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Header() {
  const [{ user, profilePic }, dispatch] = useStateValue();
  const handleLogout = () => {
    window.location.reload(false);
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={FB} alt="logo" />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>

        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <MenuAction internalIcon={<ForumIcon fontSize="small" />} mainIcon={<ForumIcon />} text="You don't have any new messages." />
        
        <MenuAction internalIcon={<NotificationsActiveIcon fontSize="small" />} mainIcon={<NotificationsActiveIcon />} text="No new notifications." />
        
        <MenuAction internalIcon={<ExitToAppIcon fontSize="small" />} mainIcon={<ExpandMoreIcon />} clicked={handleLogout} text="Logout"/>
       
      </div>
    </div>
  );
}

export default Header;
