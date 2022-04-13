import React, { useEffect, useState } from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import { getFirestore } from 'firebase/firestore'
import { onSnapshot, collection, query, orderBy} from "firebase/firestore";

function Feed() {

  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "posts"),orderBy('timestamp', 'desc'))
    onSnapshot(q, (snapshot) => (
      setPosts(snapshot.docs.map(doc =>({ id: doc.id, data:doc.data() })))
    ))
  }, [])

  // useEffect(() => {
  //   const q = query(collection(db, "buddies"))
  //   const unsub = onSnapshot(q, (querySnapshot) => {
  //     console.log("Data", querySnapshot.docs.map(d => doc.data()));
  //   });
  // }, [])

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map(post => (
        <Post 
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp}
        username={post.data.username}
        image={post.data.image}
        />
      ))}
      
    </div>
  );
}

export default Feed;
