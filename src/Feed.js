import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [like, getLikes] = useState(0);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  const handleLikes = (postId) => {
    var post = posts.filter((post) => post.id === postId);
    const newLikes = post[0].data.likes + 1;
    getLikes(newLikes);
    db.collection("posts").doc(postId).update({ likes: newLikes });
  };

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          likes={post.data.likes}
          clicked={() => handleLikes(post.id)}
          key={post.id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          image={post.data.image}
          message={post.data.message}
          timestamp={post.data.timestamp}
          feeling={post.data.feeling}
        />
      ))}
    </div>
  );
}

export default Feed;
