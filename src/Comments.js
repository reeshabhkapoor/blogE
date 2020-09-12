import React from "react";
import { Avatar } from "@material-ui/core";
import "./Comments.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginTop: "2px"
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Comments({ comment }) {
  const classes = useStyles();
  return (
    <div className="comments__main">
      <Avatar src={comment.profilePic} className={classes.small} />
      <div className="show__comments">
        <div className="comment__text">
          <span
            style={{ fontWeight: "700", color: "#3578E5", marginRight: "5px" }}
          >
            {comment.name}
          </span>
          <p> {comment.comment}</p>
        </div>
        <div className="time">
          <p>{new Date(comment.timestamp).toUTCString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
