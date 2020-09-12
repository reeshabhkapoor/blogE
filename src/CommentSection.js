import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import "./CommentSection.css";
import db from "./firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginTop: "4px",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const CommentSection = ({ postId }) => {
  const [input, setInput] = useState("");
  const classes = useStyles();


  const [state] = useStateValue();
  const changeEvent = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection("posts")
      .doc(postId)
      .get()
      .then((doc) => {
        db.collection("posts")
          .doc(postId)
          .update({
            comments: [
              ...doc.data().comments,
              {
                name: state.user.providerData[0].displayName,
                profilePic: state.user.providerData[0].photoURL,
                comment: input,
                timestamp: new Date().toUTCString(),
              },
            ],
          });
      });

    setInput("");
  };

  return (
    <>
      <Avatar
        src={state.user.providerData[0].photoURL}
        className={classes.small}
      />
      <form onSubmit={handleSubmit}>
        <input
          onChange={changeEvent}
          value={input}
          className="commentSection__input"
          placeholder="Write your comment"
        />
        <div className="submitPost">
          <PublishIcon onClick={handleSubmit} type="submit">
            Hidden Submit
          </PublishIcon>
        </div>
      </form>
    </>
  );
};

export default CommentSection;
