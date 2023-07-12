import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase-config";
import { doc, getDocs, collection, deleteDoc } from "firebase/firestore";

import Post from "../Components/posts";
import Newpost from "../Components/newPost";

function Community() {
  const postsCollectionRef = collection(db, "Post");

  const [Posts, setPosts] = useState([]);

  const getposts = async () => {
    try {
      const data = await getDocs(postsCollectionRef);
      const filtereddata = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(filtereddata);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getposts();
  }, []);

  return (
    <div className="community">
      <Newpost />
      {Posts.map((post) => (
        <Post
          key={post.id}
          username={post.Username}
          content={post.Content}
          uid={post.uid}
          postID={post.id}
        />
      ))}
    </div>
  );
}

export default Community;
