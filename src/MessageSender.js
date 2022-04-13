import { InsertEmoticon, PhotoLibrary, Videocam } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./MessageSender.css";
import { useStateValue } from "./StateProvider";
import { doc, getFirestore, setDoc, serverTimestamp } from "firebase/firestore";

function MessageSender() {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const db = getFirestore();
  const [count, setCount] = useState(0)

  const docData = {
    message: input,
    timestamp: serverTimestamp(),
    profilePic: user.photoURL,
    username: user.displayName,
    image: imageUrl,
  };


  const postRef = doc(db, 'posts', ((user.uid) + count));
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1)
    setDoc(postRef, docData);
    
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="messageSender__input"
            placeholder={`What's on your mind? ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            placeholder="image URL (optional)"
          />
          <button type="submit" onClick={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
