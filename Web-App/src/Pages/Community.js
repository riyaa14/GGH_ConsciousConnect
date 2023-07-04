import { useState, useEffect } from "react";

import { db } from "../firebase-config";
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
    deleteDoc(doc(db, "Post", "tKFK18Qs85bgJtQ8B7kO"));
    deleteDoc(doc(db, "Post", "urYBD9cObZnAeRGQPwQd"));
  }, []);

  return (
    <div className="community">
      <Newpost />
      {Posts.map((post) => (
        <Post key={post.id} username={post.Username} content={post.Content} />
      ))}
    </div>
  );
}

export default Community;
