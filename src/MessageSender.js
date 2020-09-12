import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideoCamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";
import PublishIcon from "@material-ui/icons/Publish";
import Picker from "emoji-picker-react";
import ImageSearchRoundedIcon from "@material-ui/icons/ImageSearchRounded";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [emojiDisplay, changeEmojiDisplay] = useState(false);
  const [addImageUrl, changeImageUrlDisplay] = useState(false);

  const onEmojiClick = (emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const openEmoji = () => {
    changeEmojiDisplay(!emojiDisplay);
    setChosenEmoji(null);
  };

  const changeEvent = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
      feeling: chosenEmoji ? `is feeling ${chosenEmoji.emoji}` : "",
      likes: 0,
      userId: user.uid,
      likesPeople: [],
      comments: [],
    });

    setInput("");
    setImageUrl("");
    setChosenEmoji(null);
    changeEmojiDisplay(false);
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            type="textarea"
            onChange={changeEvent}
            value={input}
            className="messageSender__input"
            placeholder={`Say something.. ${user.displayName}`}
          />
          {addImageUrl ? (
            <input
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
              type="text"
              placeholder="image URL (Optional)"
            />
          ) : null}

          {/* <div onClick={openEmoji} className="emojiSelect">
            <InsertEmoticonIcon style={{ color: "orange" }} />
          </div> */}
          <div
            className="add__image__url"
            onClick={() => changeImageUrlDisplay(!addImageUrl)}
          >
            <ImageSearchRoundedIcon />
          </div>

          <div className="submitPost">
            <PublishIcon onClick={handleSubmit} type="submit">
              Hidden Submit
            </PublishIcon>
          </div>
        </form>
      </div>
      {emojiDisplay ? (
        <div className="messageSender__middle">
          <p>is feeling {chosenEmoji ? chosenEmoji.emoji : null}</p>
        </div>
      ) : null}
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideoCamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div onClick={openEmoji} className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling</h3>
        </div>
        {emojiDisplay ? (
          <div className="emojiContainer">
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MessageSender;
