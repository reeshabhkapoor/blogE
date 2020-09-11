import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [likeStyle, changeLikeStyle] = useState(0);
  const [state] = useStateValue();

  useEffect(() => {

    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  const checkAlreadyLiked = (postId) => {    
    let isAlreadyLiked = false;

    posts
      .filter((post) => post.id === postId)
      .map((post) => {
        if (post.data.likesPeople.includes(state.user.providerData[0].uid)) {          
          isAlreadyLiked = true;
        }
      });

    return isAlreadyLiked;
  };

  const handleLikes = (postId) => {
    db.collection("posts")
      .doc(postId)
      .get()
      .then((doc) => {
        if (!doc.data().likesPeople.includes(state.user.providerData[0].uid)) {
          db.collection("posts")
            .doc(postId)
            .update({
              likesPeople: [
                ...doc.data().likesPeople,
                state.user.providerData[0].uid,
              ],
              likes: doc.data().likes + 1,
            });
        }else{
          alert("You have already liked the post.")
        }
      });
  };

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          likes={post.data.likes}
          clicked={() => handleLikes(post.id)}
          alreadyLiked={checkAlreadyLiked(post.id)}
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
