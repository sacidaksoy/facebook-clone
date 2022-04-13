import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image={"https://source.unsplash.com/random?sig=123"}
        profileSrc={"https://source.unsplash.com/random"}
        title={"sac"}
      />
      <Story
        image={"https://source.unsplash.com/random?sig=123"}
        profileSrc={"https://source.unsplash.com/random"}
        title={"sad"}
      />
      <Story
        image={"https://source.unsplash.com/random?sig=123"}
        profileSrc={"https://source.unsplash.com/random"}
        title={"sdfsdf"}
      />
      <Story
        image={"https://source.unsplash.com/random?sig=123"}
        profileSrc={"https://source.unsplash.com/random"}
        title={"sfdgac"}
      />
      <Story
        image={"https://source.unsplash.com/random?sig=123"}
        profileSrc={"https://source.unsplash.com/random"}
        title={"hgfh"}
      />
    </div>
  );
}

export default StoryReel;
