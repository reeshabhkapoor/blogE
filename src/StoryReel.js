import React from "react";
import Story from "./Story";
import "./StoryReel.css"

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://source.unsplash.com/400x300/?party"
        profileSrc="https://source.unsplash.com/400x300/?minion"
        title="Reepster"
      />
      <Story
        image="https://source.unsplash.com/400x300/?home"
        profileSrc="https://source.unsplash.com/400x300/?joker"
        title="Rishvoker"
      />
      <Story
        image="https://source.unsplash.com/400x300/?work"
        profileSrc="https://source.unsplash.com/400x300/?superman"
        title="Zan Tan"
      />
      <Story
        image="https://source.unsplash.com/400x300/?island"
        profileSrc="https://source.unsplash.com/400x300/?zombie"
        title="Zombie"
      />
    </div>
  );
}

export default StoryReel;
