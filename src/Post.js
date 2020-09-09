import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { PinDropSharp } from "@material-ui/icons";

function Post({
  likes,
  clicked,
  profilePic,
  image,
  username,
  timestamp,
  message,
  feeling,
}) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <div className="name__feeling">
            <h3>{username}</h3>
            <div className="feeling">
              <p> {feeling}</p>
            </div>
          </div>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      {message === "" ? null : (
        <div className="post__bottom">
          <p>{message}</p>
        </div>
      )}

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option" onClick={clicked}>
          <div className="likes">
            <h5>{likes}</h5>
          </div>

          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon src={profilePic} />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
