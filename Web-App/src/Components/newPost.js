import { useState } from "react";
import MonkeyLearn from "monkeylearn";
import { auth, db } from "../firebase-config";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  FieldValue,
} from "firebase/firestore";

function Newpost() {
  const [content, setContent] = useState("");

  const postsCollectionRef = collection(db, "Post");

  // var checkIfRelatedToEnvironment = (content) => {
  //   // use the api
  //   const ml = new MonkeyLearn("c26d09260733c83910acc5916265fe7fb96785db");
  //   let model_id = "cl_Wtsc37Zo";
  //   let data = [content];
  //   ml.classifiers.classify(model_id, data).then(async (res) => {
  //     const tag_name = res.body[0].classifications[0].tag_name;
  //     console.log(tag_name);
  //     if (tag_name === "environment-related") return true;
  //     else if (tag_name === "not-environment-related") return false;
  //     else return true;
  //   });
  // };

  var checkIfRelatedToEnvironment = async (content) => {
    // use the api
    const ml = new MonkeyLearn("c26d09260733c83910acc5916265fe7fb96785db");
    let model_id = "cl_Wtsc37Zo";
    let data = [content];
    try {
      const res = await ml.classifiers.classify(model_id, data);
      const tag_name = res.body[0].classifications[0].tag_name;
      console.log(tag_name);
      if (tag_name === "environment-related") return true;
      else if (tag_name === "not-environment-related") return false;
      else return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handlePost = async () => {
    try {
      // Check if Related to environment or not
      var isRelatedToEnvironment = await checkIfRelatedToEnvironment(content);
      if (isRelatedToEnvironment === false) {
        alert("POSTS NOT RELATED TO ENVIRONMENT ARE NOT ALLOWED");
        throw "not-related-to-environment";
      }

      // ADD POST
      await addDoc(postsCollectionRef, {
        Content: content,
        Username: auth?.currentUser?.displayName,
        uid: auth?.currentUser?.uid,
      });

      // UPDATE POINTS
      // const userID = auth?.currentUser?.uid;
      // const userRef = doc(db, "User", userID);
      // console.log(userID);
      // console.log(userRef);

      // const data = await getDoc(userRef);
      // console.log(data);
      // const prevPoints = data.data()["Points"];
      // console.log(prevPoints);

      // await userRef.doc().update({
      //   Points: prevPoints + 10,
      // });

      // UPDATE POINTS
      const userID = auth?.currentUser?.uid;
      const userRef = doc(db, "User", userID);
      console.log(userID);
      console.log(userRef);

      const data = await getDoc(userRef);
      console.log(data);
      const prevPoints = await data.data()["Points"];
      console.log(prevPoints);

      await updateDoc(userRef, {
        Points: prevPoints + 10,
      });

      // setContent("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="contentContainer">
        <div className="twitter boxContainer">
          <label className="twitter tweetHeader">Compose</label>
          <span className="close"></span>
          <div className="lineSplit"></div>
          <textarea
            className="messageBox"
            id="postMessage"
            placeholder="What's happening?"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <input
            type="button"
            className="postButton"
            id="submitPost"
            value="POST"
            onClick={handlePost}
          />
        </div>
      </div>
    </>
  );
}

export default Newpost;
